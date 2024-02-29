import React, { useState } from 'react';
import "../styles/login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login authentication here (e.g., send data to backend)

    console.log("Login submitted:", { email, password });

    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btt" type="submit">Login</button>
      </form>
    </div>
  );
};
