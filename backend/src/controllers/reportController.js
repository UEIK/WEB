const { sequelize } = require("../config/dbConfig");
const { QueryTypes } = require("sequelize");

const getRevenueReport = async (req, res) => {
    try {
        const { groupBy = "month", productId, startDate, endDate } = req.query;

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 15;
        const offset = (page - 1) * limit;

        let groupField;
        switch (groupBy) {
            case "day":
                groupField = "CONVERT(date, o.order_date)";
                break;
            case "month":
                groupField = "FORMAT(o.order_date, 'yyyy-MM')";
                break;
            case "year":
                groupField = "YEAR(o.order_date)";
                break;
            default:
                groupField = "FORMAT(o.order_date, 'yyyy-MM')";
        }

        const replacements = {};
        let conditions = `WHERE o.status = 'Delivered'`;

        if (productId) {
            conditions += ` AND od.product_id = :productId`;
            replacements.productId = productId;
        }
        if (startDate) {
            conditions += ` AND o.order_date >= :startDate`;
            replacements.startDate = `${startDate} 00:00:00`;
        }
        if (endDate) {
            conditions += ` AND o.order_date <= :endDate`;
            replacements.endDate = `${endDate} 23:59:59`;
        }

        const sql = `
      SELECT
        ${groupField} AS period,
        p.id AS product_id,
        p.name AS product_name,
        SUM(od.quantity * od.price) AS total_revenue,
        SUM(od.quantity) AS total_quantity_sold
      FROM [ORDER] o
      JOIN ORDER_DETAIL od ON o.id = od.order_id
      JOIN Product p ON p.id = od.product_id
      ${conditions}
      GROUP BY ${groupField}, p.id, p.name
      ORDER BY period DESC, total_revenue DESC
      OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY
    `;

        const data = await sequelize.query(sql, {
            type: QueryTypes.SELECT,
            replacements,
        });

        const countSql = `
      SELECT COUNT(DISTINCT p.id) AS total
      FROM [ORDER] o
      JOIN ORDER_DETAIL od ON o.id = od.order_id
      JOIN Product p ON p.id = od.product_id
      ${conditions}
    `;

        const countResult = await sequelize.query(countSql, {
            type: QueryTypes.SELECT,
            replacements,
        });

        const total = countResult[0]?.total || 0;
        const totalPages = Math.ceil(total / limit);

        res.status(200).json({
            code: 200,
            message: "Lấy báo cáo doanh thu thành công",
            data,
            totalPages,
            currentPage: page,
        });
    } catch (error) {
        console.error("Lỗi lấy báo cáo doanh thu:", error);
        res.status(500).json({
            code: 500,
            message: "Lỗi máy chủ",
            detail: error.message,
        });
    }
};

module.exports = { getRevenueReport };
