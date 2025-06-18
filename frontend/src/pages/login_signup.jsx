// src/pages/LoginSignup.jsx
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { GoogleLogin } from "@react-oauth/google"
import "../styles/login_signup.css"

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030"

const LoginSignup = () => {
  const [action, setAction] = useState("Login")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  // Handle Google OAuth
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const googleToken = credentialResponse.credential
      const res = await axios.post(
        `${API_URL}/api/auth/google`,
        { token: googleToken },
        { headers: { "Content-Type": "application/json" } }
      )

      const user = res.data.data
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify(user))
      alert("✅ Logged in with Google successfully!")
      navigate("/home")
    } catch (err) {
      console.error("Google login error:", err.response?.data || err.message)
      alert(`❌ ${err.response?.data?.message || "Google login failed!"}`)
    }
  }

  // Handle normal Login / SignUp
  const handleSubmit = async () => {
    if (action === "Login") {
      if (!email || !password) {
        alert("❌ Please enter both Email and Password!")
        return
      }
      try {
        const res = await axios.post(
          `${API_URL}/api/auth/login`,
          { email, password },
          { headers: { "Content-Type": "application/json" } }
        )
        const user = res.data.data
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify(user))
        alert("✅ Login successful!")

        const redirectPath = localStorage.getItem("redirectAfterLogin")
        if (redirectPath) {
          localStorage.removeItem("redirectAfterLogin")
          navigate(redirectPath)
        } else {
          user.role_id === 2 ? navigate("/admin/user") : navigate("/home")
        }
      } catch (err) {
        console.error("Login error:", err.response?.data || err.message)
        alert(`❌ ${err.response?.data?.message || "Login failed!"}`)
      }
    } else {
      if (!username || !email || !password) {
        alert("❌ Please fill in Username, Email, and Password!")
        return
      }
      try {
        await axios.post(
          `${API_URL}/api/auth/register`,
          { name: username, email, password },
          { headers: { "Content-Type": "application/json" } }
        )
        alert("✅ Registration successful! Please log in now.")
        setAction("Login")
        setUsername("")
        setEmail("")
        setPassword("")
      } catch (err) {
        console.error("Registration error:", err.response?.data || err.message)
        alert(`❌ ${err.response?.data?.message || "Registration failed!"}`)
      }
    }
  }

  return (
    <div className="account-page">
      <div className="account-container">
        <div className="account-header">
          <div className="account-text">{action === "Login" ? "LOGIN" : "SIGN UP"}</div>
        </div>

        <div className="account-inputs">
          {action === "Sign Up" && (
            <div className="account-input">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}

          <div className="account-input">
            <input
              type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="account-input">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="account-submit-container">
            <div className="account-submit" onClick={handleSubmit}>
              {action === "Login" ? "Sign in" : "Create Account"}
            </div>

            {action === "Login" ? (
              <>  
                <div className="no-account-text">Don't have an account?</div>
                <div className="account-submit secondary" onClick={() => setAction("Sign Up")}>  
                  Sign Up
                </div>
              </>
            ) : (
              <>
                <div className="no-account-text">Already have an account?</div>
                <div className="account-submit secondary" onClick={() => setAction("Login")}>  
                  Log In
                </div>
              </>
            )}
          </div>

          {/* Social login */}
          <div className="social-login" style={{ marginTop: 24, textAlign: "center" }}>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={() => alert("❌ Google login failed!")}
            />
          </div>

          <div className="return-store" onClick={() => navigate("/home")}>  
            Return to Store
          </div>
        </div>
      </div>
  )
}

export default LoginSignup
