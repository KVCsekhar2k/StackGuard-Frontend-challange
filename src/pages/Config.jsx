import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import "./Config.css"

export default function Config() {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (key.length < 100 || key.length > 1000) return setError("Key must be between 100–1000 characters.");
    localStorage.setItem("stack_config", "true");
    navigate("/dashboard");
  };

  return (
    <Layout leftImage="https://i.pinimg.com/736x/cb/c7/61/cbc761869bdab11c861429f1868fd76b.jpg">
      <div className="auth-box">
        <div className="auth-header">
          <img src="https://i.ibb.co/LD6bVgfw/stackguard-logo.jpg" alt="Stackguard logo" className="logo" />
          <h2>Verify your public key</h2>
          <p>To get started provide your public key for verification</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input placeholder="Enter your public key" value={key} onChange={(e) => setKey(e.target.value)} />
          {error && <p className="error">{error}</p>}
          <Button text="Verify" color="#4C1D95" />
        </form>

        <p className="toggle-link">Don’t have a public key? Contact your administrator.</p>
      </div>
    </Layout>
  );
}
