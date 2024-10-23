import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginBackground from '../../assets/images/login-background.jpg'; // Adjust the path as needed


const Login = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true); // Disable the button

    // Simple validation
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Username and password are required");
      setIsLoading(false);
      return;
    }

    // Simulate an API call (delayed response)
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        setAuth(true);
        navigate("/");
      } else {
        setErrorMessage("Invalid username or password");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${loginBackground})` }}>
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

        {errorMessage && <p className="error">{errorMessage}</p>}

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
