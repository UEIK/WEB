import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/sidebar";
import "../styles/RevenueReport.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const RevenueReport = () => {
    const [reportData, setReportData] = useState([]);
    const [groupBy, setGroupBy] = useState("day");
    const [selectedProduct, setSelectedProduct] = useState("");
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const limit = 15;

    useEffect(() => {
        axios
            .get("http://localhost:3030/api/products/search?limit=1000")
            .then((res) => {
                setProducts(res.data.products || []);
            })
            .catch((err) => {
                console.error("Lỗi lấy danh sách sản phẩm:", err);
            });
    }, []);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const params = {
                    groupBy,
                    page: currentPage,
                    limit,
                };
                if (selectedProduct) params.productId = selectedProduct;
                if (startDate) params.startDate = startDate;
                if (endDate) params.endDate = endDate;

                const res = await axios.get(
                    "http://localhost:3030/api/reports/revenue",
                    { params }
                );
                setReportData(res.data.data || []);
                setTotalPages(res.data.totalPages);
            } catch (err) {
                console.error("Lỗi lấy báo cáo doanh thu:", err);
                setReportData([]);
            }
        };

        fetchReport();
    }, [groupBy, selectedProduct, startDate, endDate, currentPage]);

    const revenueByPeriod = {};
    reportData.forEach((item) => {
        const period = item.period;
        if (!revenueByPeriod[period]) revenueByPeriod[period] = 0;
        revenueByPeriod[period] += item.total_revenue;
    });

    const aggregatedChartData = {
        labels: Object.keys(revenueByPeriod),
        datasets: [
            {
                label: "Total Revenue",
                data: Object.values(revenueByPeriod),
                backgroundColor: "#4A90E2",
                borderColor: "#2F80ED",
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: `Revenue by ${groupBy}` },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: "Revenue ($)" },
            },
            x: {
                title: {
                    display: true,
                    text: groupBy.charAt(0).toUpperCase() + groupBy.slice(1),
                },
            },
        },
    };

    return (
        <div className="admin-container">
            <AdminSidebar active="REVENUE" />
            <div className="admin-content">
                <div className="admin-header">
                    <div>
                        <h2>REVENUE REPORT</h2>
                        <p>View report</p>
                    </div>
                </div>

                <div className="filter-section-report">
                    <label>
                        Time:{" "}
                        <select
                            value={groupBy}
                            onChange={(e) => setGroupBy(e.target.value)}
                        >
                            <option value="day">By day</option>
                            <option value="month">By month</option>
                            <option value="year">By year</option>
                        </select>
                    </label>

                    <label>
                        Product:{" "}
                        <select
                            value={selectedProduct}
                            onChange={(e) => setSelectedProduct(e.target.value)}
                        >
                            <option value="">All product</option>
                            {products.map((prod) => (
                                <option key={prod.id} value={prod.id}>
                                    {prod.name}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label>
                        From:{" "}
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </label>

                    <label>
                        To:{" "}
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </label>
                </div>

                {reportData.length > 0 && (
                    <div className="chart-container">
                        <Bar data={aggregatedChartData} options={chartOptions} />
                    </div>
                )}

                <div className="admin-table-wrapper">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Product name</th>
                                <th>Quantity</th>
                                <th>Revenue</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportData.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="no-data-cell">
                                        Không có dữ liệu
                                    </td>
                                </tr>
                            ) : (
                                reportData.map((item, index) => (
                                    <tr key={index} className={index % 2 === 1 ? "even" : ""}>
                                        <td>{item.period}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.total_quantity_sold}</td>
                                        <td>{item.total_revenue.toLocaleString()}</td>
                                        <td>
                                            <a
                                                href={`/product/${item.product_id}`}
                                                className="viewproduct-link"
                                            >
                                                View product
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="pagination-admin">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        <GrFormPrevious size={20} />
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                        }
                        disabled={currentPage === totalPages}
                    >
                        <GrFormNext size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RevenueReport;
