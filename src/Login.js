import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      const res = await axios.post("https://liveapi-z54l.onrender.com/login", formData);

      // Store token in localStorage
      localStorage.setItem("token", res.data.token);

      alert(res.data.message); 
      navigate("/dashboard");// Show success message
      console.log("Login successful:", res.data);
    } catch (e) {
      console.error("Login failed:", e.response?.data?.message || e.message);
      alert("Login failed: " + (e.response?.data?.message || "An error occurred"));
    }
  };
//   const handleLogin = () => {
//     navigate("/dashboard");
//   }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
