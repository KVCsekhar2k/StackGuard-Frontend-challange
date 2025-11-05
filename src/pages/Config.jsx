import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import "./Config.css";

export default function Config() {
  const navigate = useNavigate();

  const handleVerify = () => {
    // Instantly set verified config
    localStorage.setItem("stack_config", "true");
    navigate("/dashboard");
  };

  return (
    <Layout leftImage="https://i.pinimg.com/1200x/25/f3/79/25f3792bb151520d1ae87926e8e6633a.jpg">
      <div className="config-container">
        <div className="config-header">
          <img src="https://i.ibb.co/LD6bVgfw/stackguard-logo.jpg" alt="Stackguard logo" className="logo" />
          <h2>Welcome, you're almost done!</h2>
          <p>Click the button below to complete your setup and access your dashboard.</p>
        </div>

        <div className="verify-box">
          <Button text="Verify Now" color="#4C1D95" onClick={handleVerify} />
        </div>

        <p className="config-note">
          This step simulates verification — no public key required for testing.
        </p>
      </div>
    </Layout>
  );
}
