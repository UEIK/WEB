"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/AccInfo.css"

const AccountInfo = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    alert("Logged out successfully!");
    navigate("/account");
    window.scrollTo(0, 0);
  }

  const handleAdminClick = () => {
    navigate("/admin/user");
    window.scrollTo(0, 0);
  }

  if (!user) {
    return (
      <div className="acc-container not-logged-in">
        <div className="acc-card">
          <div className="acc-header">
            <div className="acc-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h1>Welcome Back</h1>
            <p className="acc-subtitle">Please sign in to access your account</p>
          </div>
          <div className="acc-content">
            <div className="acc-empty-state">
              <div className="acc-empty-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.68.94 6.36 2.64" />
                </svg>
              </div>
              <h3>Account Access Required</h3>
              <p className="acc-message">
                You need to be logged in to view your account information and manage your settings.
              </p>
              <button className="acc-primary-button" onClick={() => navigate("/account")}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="acc-container">
      <div className="acc-card">
        <div className="acc-header">
          <div className="acc-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h1>Account Information</h1>
        </div>

        <div className="acc-content">
          <div className="acc-user-info">
            <div className="acc-info-row">
              <div className="acc-info-label">
                <div className="acc-label-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span>Username</span>
              </div>
              <div className="acc-info-value">
                <span className="acc-value-text">{user.username}</span>
              </div>
            </div>

            <div className="acc-info-row">
              <div className="acc-info-label">
                <div className="acc-label-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span>Email Address</span>
              </div>
              <div className="acc-info-value">
                <span className="acc-value-text">{user.email}</span>
              </div>
            </div>

            <div className="acc-info-row clickable" onClick={() => navigate("/orderpage")}>
              <div className="acc-info-label">
                <div className="acc-label-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 4h18v2H3V4zm0 6h18v2H3v-2zm0 6h12v2H3v-2z" />
                  </svg>
                </div>
                <span>Order History</span>
              </div>
              <div className="acc-info-value">
                <span className="acc-value-text" style={{ color: "#007bff", textDecoration: "underline" }}>View Orders</span>
              </div>
            </div>

            {user.role_id === 2 && (
              <div className="acc-info-row">
                <div className="acc-info-label">
                  <div className="acc-label-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span>Account Role</span>
                </div>
                <div className="acc-info-value">
                  <span className="acc-value-text acc-role-admin">Administrator</span>
                </div>
              </div>
            )}
          </div>

          <div className="acc-actions">
            <div className="acc-buttons-grid">
              {user.role_id === 2 && (
                <button className="acc-admin-button" onClick={handleAdminClick}>
                  <span className="acc-button-title">Admin Dashboard</span>
                </button>
              )}

              <button className="acc-logout-button" onClick={handleLogout}>
                <span className="acc-button-title">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo
