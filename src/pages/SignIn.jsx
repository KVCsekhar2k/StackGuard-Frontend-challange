import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { useAuth } from "../context/AuthContext";
import "./SignIn.css";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return setError("Enter a valid email");
    if (password.length < 6) return setError("Password must be at least 6 characters");
    login(email);
    navigate("/config");
  };

  return (
    <Layout leftImage="https://i.pinimg.com/1200x/1f/de/bd/1fdebdf3affc709315d8e5f9df8d3b7f.jpg">
      <div className="auth-box">
        <div className="auth-header">
          <img src="https://i.ibb.co/LD6bVgfw/stackguard-logo.jpg" alt="Stackguard logo" className="logo" />
          <h2>Welcome back to Stackguard</h2>
          <p>Secure your codebase with advanced secret scanning security best practices</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input placeholder="Enter email ID" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Enter password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="error">{error}</p>}
          <Button text="Sign in" color="#4C1D95" />
        </form>
        <div className="link-box">
          <p>Don't have an account? <Link to="/signup" className="link">Sign up</Link></p><p className="terms">
          By continuing, you agree to our <u>Terms of Service</u> and <u>Privacy Policy</u>
        </p>
        </div>
        
      </div>
    </Layout>
  );
}
