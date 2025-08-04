import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // prevent form reload
    // Add your login logic here
    navigate("/dashboard");
  };

  return (
    <div className="login-page ">
     <div  className="    border-double box-content h-90 w-90 p-20 border-4 border-black " >
      <center>
      <h2 className="py-10  text-2xl font-bold">Login</h2>
      </center>

      <form onSubmit={handleLogin}>
        <div className="input-group    ">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" required />
        </div>
        <center>
        <button type="submit" className="    bg-blue-600 text-white px-4 py-2 rounded  ">Login</button>
      
      </center></form>
      <div className="footer-text">
        Don't have an account? <a href="./Dashboard.jsx">Sign up</a>
      </div>
      </div>

    </div>
  );
};

export default Login;
