import React, { useEffect, useState } from "react";
import "../styles/OrderPage.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 7;

  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  useEffect(() => {
    if (location.state?.refresh) {
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:3030/api/order/user/${userId}?page=${currentPage}&limit=${limit}`)
        .then((res) => {
          setOrders(res.data.data || []);
          setTotalPages(res.data.totalPages);
        })
        .catch((err) => {
          console.error("Lỗi lấy danh sách đơn hàng:", err);
        });
    }
  }, [userId, currentPage]);

  return (
    <div className="order-container">
      <h2 className="order-title">YOUR ORDERS</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>CODE</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="5">No orders found.</td>
            </tr>
          ) : (
            orders.map((order, idx) => (
              <tr key={order.id} className={idx % 2 === 0 ? "even" : "odd"}>
                <td>
                  #{`ORD${order.id}${String.fromCharCode(97 + (order.id % 26))}`}
                </td>
                <td>{new Date(order.order_date).toLocaleDateString()}</td>
                <td>{order.total_money}$</td>
                <td>{order.status}</td>
                <td>
                  <Link to={`/order/${order.id}`} className="order-details-link">
                    Details
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="pagination-order">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <GrFormPrevious size={20} />
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <GrFormNext size={20} />
        </button>
      </div>
    </div>
  );
}
