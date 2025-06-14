import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/sidebar";
import "../styles/RevenueReport.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";

const AdminInventory = () => {
    const [inventory, setInventory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [editingSizeId, setEditingSizeId] = useState(null);
    const [editingQuantity, setEditingQuantity] = useState(0);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState("");
    const limit = 12;

    const fetchInventory = async (page = 1, productId = "") => {
        try {
            let url = `http://localhost:3030/api/inventory?page=${page}&limit=${limit}`;
            if (productId) {
                url += `&productId=${productId}`;
            }
            const res = await axios.get(url);
            setInventory(res.data.data || res.data);
            setTotalPages(res.data.totalPages || 1);
            setCurrentPage(page);
        } catch (err) {
            console.error("❌ Lỗi khi lấy inventory:", err);
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:3030/api/products/search?limit=1000");
                setProducts(res.data.products || []);
            } catch (err) {
                console.error("Lỗi lấy danh sách sản phẩm:", err);
            }
        };
        fetchProducts();
        fetchInventory(currentPage, selectedProduct);
    }, [currentPage, selectedProduct]);

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);
    };

    const handleEditClick = (item) => {
        setEditingSizeId(item.size_id);
        setEditingQuantity(item.quantity);
    };

    const handleQuantityChange = (e) => {
        setEditingQuantity(e.target.value);
    };

    const handleQuantitySave = async () => {
        try {
            await axios.put("http://localhost:3030/api/inventory/update", {
                size_id: editingSizeId,
                quantity: parseInt(editingQuantity)
            });

            setEditingSizeId(null);
            setEditingQuantity(0);
            fetchInventory(currentPage, selectedProduct);
        } catch (err) {
            console.error("Lỗi khi cập nhật tồn kho:", err);
            alert("Lỗi khi cập nhật tồn kho");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleQuantitySave();
        }
    };

    return (
        <div className="admin-container">
            <AdminSidebar active="INVENTORY" />

            <div className="admin-content">
                <div className="admin-header">
                    <div>
                        <h2>INVENTORY</h2>
                        <p>View, update, manage stock quantities.</p>
                    </div>
                </div>
                <div className="filter-section-report">
                    <label>
                        Product:&nbsp;
                        <select value={selectedProduct} onChange={handleProductChange}>
                            <option value="">All product</option>
                            {products.map((prod) => (
                                <option key={prod.id} value={prod.id}>
                                    {prod.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>IMAGE</th>
                            <th>NAME</th>
                            <th>SIZE</th>
                            <th>STOCK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item, index) => (
                            <tr key={item.size_id} className={index % 2 === 1 ? "even" : ""}>
                                <td>
                                    {item.product_image ? (
                                        <img src={`http://localhost:3000${item.product_image}`} alt="Product" style={{ width: 50 }} />
                                    ) : (
                                        "No image"
                                    )}
                                </td>
                                <td>{item.product_name}</td>
                                <td>{item.size}</td>
                                <td>
                                    {editingSizeId === item.size_id ? (
                                        <input
                                            type="number"
                                            value={editingQuantity}
                                            onChange={handleQuantityChange}
                                            onKeyDown={handleKeyPress}
                                            onBlur={handleQuantitySave}
                                            style={{ width: 60, padding: "5px" }}
                                            autoFocus
                                        />
                                    ) : (
                                        <>
                                            {item.quantity}{" "}
                                            <FaEdit
                                                style={{ cursor: "pointer" }}
                                                onClick={() => handleEditClick(item)}
                                            />
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="pagination-admin">
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
        </div>
    );
};

export default AdminInventory;
