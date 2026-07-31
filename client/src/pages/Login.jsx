import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  // ==========================
  // State
  // ==========================
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ==========================
  // Navigation
  // ==========================
  const navigate = useNavigate();

  // ==========================
  // Login Function
  // ==========================
  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("1. Button Clicked");
    console.log("2. Email:", email);
    console.log("3. Password:", password);

    try {
      console.log("4. Sending Request...");

      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log("5. Response:", data);

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Save JWT Token
      localStorage.setItem("token", data.token);

      console.log("6. Token Saved");

      alert(data.message);

      console.log("7. Navigating to Dashboard...");

      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message || "Login Failed");
    }
  };

  // ==========================
  // UI
  // ==========================
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>ShiftFlow</h1>

        <p>Employee Shift Management System</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;