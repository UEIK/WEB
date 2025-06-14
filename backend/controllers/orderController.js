const { Order, OrderDetail, Product, Gallery, Cart, CartItem, ProductSize } = require("../models/AssociationsRelationship");
const { Op } = require("sequelize");
const moment = require("moment");

exports.placeOrder = async (req, res) => {
  const transaction = await Order.sequelize.transaction();
  try {
    const {
      user_id,
      name,
      email,
      phone_number,
      address,
      note,
      total_money,
      items,
    } = req.body;

    const orderDate = moment().utcOffset(0).format("YYYY-MM-DD HH:mm:ss");
    console.log("Ngày order format:", orderDate);

    for (const item of items) {
      const productSize = await ProductSize.findOne({
        where: {
          product_id: item.product_id,
          size: item.size
        }
      });

      if (!productSize || productSize.quantity < item.quantity) {
        await transaction.rollback();
        return res.status(400).json({
          error: `Sản phẩm ${item.product_id} (size ${item.size}) chỉ còn ${productSize?.quantity || 0} sản phẩm trong kho.`
        });
      }
    }

    const order = await Order.create({
      user_id,
      name,
      email,
      phone_number,
      address,
      note,
      order_date: orderDate,
      status: "Processing",
      total_money,
    }, { transaction });

    const orderDetails = items.map((item) => ({
      order_id: order.id,
      product_id: item.product_id,
      price: item.price,
      quantity: item.quantity,
      size: item.size,
    }));
    await OrderDetail.bulkCreate(orderDetails, { transaction });

    for (const item of items) {
      await ProductSize.decrement("quantity", {
        by: item.quantity,
        where: {
          product_id: item.product_id,
          size: item.size
        },
        transaction
      });
    }

    const userCart = await Cart.findOne({ where: { user_id }, transaction });

    if (userCart) {
      const productIds = items.map(item => item.product_id);

      await CartItem.destroy({
        where: {
          cart_id: userCart.id,
          product_id: { [Op.in]: productIds }
        },
        transaction
      });
    }

    await transaction.commit();
    return res.status(201).json({ message: "Đặt hàng thành công!" });
  } catch (error) {
    await transaction.rollback();
    console.error("Lỗi đặt hàng:", error);
    return res.status(500).json({ error: "Lỗi máy chủ", detail: error.message });
  }
};


exports.getAllOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const offset = (page - 1) * limit;

    const { count, rows } = await Order.findAndCountAll({
      order: [["id", "DESC"]],
      limit,
      offset,
    });

    const totalPages = Math.ceil(count / limit);

    res.status(200).json({
      code: 200,
      message: "Lấy danh sách đơn hàng thành công",
      data: rows,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    console.error("Lỗi lấy danh sách đơn hàng:", error);
    return res.status(500).json({ error: "Lỗi máy chủ", detail: error.message });
  }
};

exports.getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;
    const details = await OrderDetail.findAll({
      where: { order_id: orderId },
      include: [
        {
          model: Product,
          as: "Product",
          attributes: ["name"],
          include: [
            {
              model: Gallery,
              as: "Galleries",
              attributes: ["thumbnail"],
              required: false,
            },
          ],
        },
        {
          model: Order,
          as: "Order",
          attributes: ["address", "name", "phone_number"],
        }
      ],
    });

    const data = details.map((d) => ({
      id: d.id,
      productname: d.Product?.name,
      image: d.Product?.Galleries?.[0]?.thumbnail || "",
      quantity: d.quantity,
      price: d.price,
      size: d.size,
      address: d.Order?.address,
      name: d.Order?.name,
      phone_number: d.Order?.phone_number,
    }));

    res.json({ data });
  } catch (error) {
    console.error("Lỗi lấy chi tiết đơn hàng:", error);
    res.status(500).json({ error: "Lỗi máy chủ", detail: error.message, stack: error.stack });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    await order.save();

    res.status(200).json({ message: 'Order status updated', status: order.status });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getOrdersByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;

    const { count, rows } = await Order.findAndCountAll({
      where: { user_id: userId },
      order: [["order_date", "DESC"]],
      limit,
      offset,
      attributes: ["id", "order_date", "status", "total_money"],
    });

    const totalPages = Math.ceil(count / limit);

    res.status(200).json({
      code: 200,
      message: "Lấy danh sách đơn hàng theo người dùng thành công",
      data: rows,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    console.error("Lỗi lấy đơn theo user:", error);
    res.status(500).json({ error: "Lỗi máy chủ", detail: error.message });
  }
};


