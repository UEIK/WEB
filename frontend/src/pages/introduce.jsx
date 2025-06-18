// src/components/Introduce.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/introduce.css';

const medalSVGs = [
  <svg key="gold" viewBox="0 0 100 120" className="medal-icon">
    <path d="M30,0 L45,0 L55,40 L40,40 Z" fill="#e63946"/>
    <path d="M70,0 L55,0 L45,40 L60,40 Z" fill="#e63946"/>
    <circle cx="50" cy="75" r="35" fill="#FFD700" stroke="#DAA520" strokeWidth="4"/>
    <polygon points="50,50 56,68 75,68 60,80 65,98 50,88 35,98 40,80 25,68 44,68" fill="#fff"/>
  </svg>,
  <svg key="silver" viewBox="0 0 100 120" className="medal-icon">
    <path d="M30,0 L45,0 L55,40 L40,40 Z" fill="#a8dadc"/>
    <path d="M70,0 L55,0 L45,40 L60,40 Z" fill="#a8dadc"/>
    <circle cx="50" cy="75" r="35" fill="#C0C0C0" stroke="#A8A8A8" strokeWidth="4"/>
    <polygon points="50,50 56,68 75,68 60,80 65,98 50,88 35,98 40,80 25,68 44,68" fill="#fff"/>
  </svg>,
  <svg key="bronze" viewBox="0 0 100 120" className="medal-icon">
    <path d="M30,0 L45,0 L55,40 L40,40 Z" fill="#f4a261"/>
    <path d="M70,0 L55,0 L45,40 L60,40 Z" fill="#f4a261"/>
    <circle cx="50" cy="75" r="35" fill="#CD7F32" stroke="#A65D24" strokeWidth="4"/>
    <polygon points="50,50 56,68 75,68 60,80 65,98 50,88 35,98 40,80 25,68 44,68" fill="#fff"/>
  </svg>
];

const Introduce = () => {
  const [topProducts, setTopProducts] = useState([]);
  const [topBuyers, setTopBuyers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3030/api/order/details')
      .then(res => {
        const all = res.data.data || [];

        // Top 3 best-selling products
        const top3Products = [...all]
          .sort((a, b) => b.quantity - a.quantity)
          .slice(0, 3);
        setTopProducts(top3Products);

        // Top 3 customers by total quantity purchased
        const buyerMap = {};
        all.forEach(item => {
          const key = `${item.name}|${item.phone_number}`;
          if (!buyerMap[key]) {
            buyerMap[key] = {
              name: item.name,
              phone: item.phone_number,
              totalQty: 0
            };
          }
          buyerMap[key].totalQty += item.quantity;
        });
        const top3Buyers = Object.values(buyerMap)
          .sort((a, b) => b.totalQty - a.totalQty)
          .slice(0, 3);
        setTopBuyers(top3Buyers);
      })
      .catch(err => console.error('Error fetching order details:', err));
  }, []);

  return (
    <>
      {/* Promo video */}
      <div className="introduce-container">
        <video
          className="introduce-video"
          src="Img_project/introduce.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Title & description */}
      <div className="intro_container">
        <h1 className="title">EMBRACE CONFIDENCE</h1>
        <div className="text-container">
          <div className="column-introduce">
            ELLE is more than a fashion label—it’s a manifesto of confidence and individuality.
            Drawing inspiration from the modern woman’s bold elegance, we craft premium designs
            that empower and inspire.
          </div>
          <div className="column-introduce">
            Our collections blend global trends with timeless Asian flair, celebrating authentic
            beauty. Committed to sustainability, we source top-quality materials and prioritize
            eco-friendly production at every step.
          </div>
        </div>

        {/* Statistics */}
        <div className="stats">
          <div className="stat">
            +3.100 <span>M€</span>
            <div className="label">Annual Revenue</div>
          </div>
          <div className="stat">
            50+
            <div className="label">Boutiques Worldwide</div>
          </div>
          <div className="stat">
            1,500+
            <div className="label">Design & Production Team</div>
          </div>
          <div className="stat">
            70%
            <div className="label">E-Commerce Growth</div>
          </div>
        </div>
      </div>

      {/* Top 3 Best-Selling Products */}
      <div className="top-products">
        <h3>Top 3 Best-Selling Products</h3>
        <div className="image-3-container">
          {topProducts.map((item, idx) => (
            <div className="image-box" key={item.id}>
              <img
                src={
                  item.image.startsWith('/')
                    ? item.image
                    : `/Img_project/${item.image}`
                }
                alt={item.productname}
                className="product-img"
              />
              {medalSVGs[idx]}
              <p className="label">
                {item.productname} × {item.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Top 3 Customers by Quantity Purchased */}
      <div className="top-buyers">
        <h3>Top 3 Customers by Quantity Purchased</h3>
        <div className="buyer-list">
          {topBuyers.map((buyer, idx) => (
            <div className="buyer-box" key={idx}>
              <div className="buyer-rank">
                {medalSVGs[idx]}
              </div>
              <div className="buyer-info">
                <p className="buyer-name">{buyer.name}</p>
                <p className="buyer-phone">{buyer.phone}</p>
                <p className="buyer-qty">Total {buyer.totalQty} items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Introduce;
