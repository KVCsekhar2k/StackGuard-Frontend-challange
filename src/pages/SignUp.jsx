import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { useAuth } from "../context/AuthContext";
import "./SignUp.css";


export default function SignUp() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first.trim() || !last.trim()) return setError("Enter your full name");
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return setError("Enter a valid email");
    if (password.length < 6) return setError("Password must be at least 6 characters");
    if (password !== confirm) return setError("Passwords do not match");
    login(email);
    navigate("/config");
  };

  return (
    <Layout leftImage="https://i.pinimg.com/1200x/34/ec/78/34ec78ae0ab34927ea8e9cf17c713ba5.jpg">
      <div className="auth-box">
        <div className="auth-header">
          <img src="https://i.ibb.co/LD6bVgfw/stackguard-logo.jpg" alt="Stackguard logo" className="logo" />
          <h2>Welcome to Stackguard</h2>
          <p>Secure your codebase with advanced secret scanning security best practices</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <Input placeholder="Enter first name" value={first} onChange={(e) => setFirst(e.target.value)} />
            <Input placeholder="Enter last name" value={last} onChange={(e) => setLast(e.target.value)} />
          </div>
          <Input placeholder="Enter email ID" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Enter password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input placeholder="Confirm password" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
          {error && <p className="error">{error}</p>}
          <Button text="Create account" color="black" />
        </form>
         <div className="link-box">  
        <p className="terms">
          By continuing, you agree to our <u>Terms of Service</u> and <u>Privacy Policy</u>
        </p>
        <p className="toggle-link">
          Already have an account? <Link to="/">Sign in</Link>
        </p>
        </div>
      </div>
    </Layout>
  );
}
