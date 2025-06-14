// src/pages/login_signup.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "../styles/login_signup.css"

const LoginSignup = () => {
  const [action, setAction] = useState("Login")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  // ✅ Login thường (giữ nguyên)
  const handleSubmit = async () => {
    if (action === "Login") {
      if (!email || !password) {
        alert("❌ Bạn cần nhập đầy đủ Email và Password!")
        return
      }

      try {
        const res = await axios.post(
          "http://localhost:3030/api/auth/login",
          { email, password },
          { headers: { "Content-Type": "application/json" } }
        )

        const user = res.data.data
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify(user))

        alert("✅ Đăng nhập thành công!")

        const redirectPath = localStorage.getItem("redirectAfterLogin")
        if (redirectPath) {
          localStorage.removeItem("redirectAfterLogin")
          navigate(redirectPath)
        } else {
          if (user.role_id === 2) {
            navigate("/admin/user")
          } else {
            navigate("/home")
          }
        }
      } catch (err) {
        console.error("🚀 ~ login error:", err.response?.data || err.message)
        alert(`❌ ${err.response?.data?.message || "Đăng nhập thất bại!"}`)
      }
    } else {
      if (!username || !email || !password) {
        alert("❌ Bạn cần nhập đầy đủ Username, Email và Password!")
        return
      }

      try {
        const res = await axios.post(
          "http://localhost:3030/api/auth/register",
          { name: username, email, password },
          { headers: { "Content-Type": "application/json" } }
        )

        alert("✅ Đăng ký thành công! Đăng nhập ngay nào!")
        setAction("Login")
        setUsername("")
        setEmail("")
        setPassword("")
      } catch (err) {
        console.error("🚀 ~ register error:", err.response?.data || err.message)
        alert(`❌ ${err.response?.data?.message || "Đăng ký thất bại!"}`)
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
            {action === "Login" ? "Sign in" : "Create"}
          </div>

          {action === "Login" ? (
            <>
              <div className="no-account-text">You don't have an account?</div>
              <div className="account-submit secondary" onClick={() => setAction("Sign Up")}>
                Sign up
              </div>
            </>
          ) : (
            <>
              <div className="no-account-text">You already have an account?</div>
              <div className="account-submit secondary" onClick={() => setAction("Login")}>
                Login
              </div>
            </>
          )}
        </div>

        <div className="return-store" onClick={() => navigate("/home")}>
          Return to Store
        </div>
      </div>
    </div>
  )
}

export default LoginSignup