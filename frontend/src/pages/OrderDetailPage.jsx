import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/OrderDetailPage.css";

export default function OrderDetailPage() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/api/order/details/${id}`)
      .then((res) => {
        setItems(res.data.data || []);
      })
      .catch((err) => {
        console.error("Lỗi lấy chi tiết đơn hàng:", err);
      });
  }, [id]);

  if (items.length === 0) return <div className="order-detail-empty">Không có dữ liệu.</div>;

  const { name, address, phone_number } = items[0];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div className="order-detail-container">
      <div className="receiver-info">
        <p><strong>{name}</strong></p>
        <p>{address}</p>
        <p>{phone_number}</p>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>SIZE</th>
            <th>QUANTITY</th>
            <th>UNIT PRICE</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={item.id} className={index % 2 !== 0 ? "odd" : ""}>
              <td className="product-info">
                <img src={item.image} alt={item.productname} />
                <span>{item.productname}</span>
              </td>
              <td>{item.size}</td>
              <td>{item.quantity}</td>
              <td>{item.price}$</td>
              <td>{item.price * item.quantity}$</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-order">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &#8592;
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}