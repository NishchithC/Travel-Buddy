import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER"); // Default role is 'user'
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    axios
      .post("http://localhost:8080/api/users/register", { email, password, role })
      .then((response) => {
        alert("Registration successful");
        navigate("/login"); // Navigate to the login page after successful registration
      })
      .catch((error) => {
        console.error("Error registering:", error.response?.data || error.message);
        alert(error.response?.data?.message || "Registration failed");
      });
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#e0f7fa",
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#00796b" }}>Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button
        onClick={handleSignUp}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#00796b",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
