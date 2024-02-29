import React, { useState } from "react";
import "../styles/signup.css";

export const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", { fullName, email, password });

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="whole-form">
      <h2 className="sign-up">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="full-name">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="bt" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
