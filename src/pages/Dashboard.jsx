import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-box">
        <div className="dashboard-header">
          <h1>Dashboard Page</h1>
          <div className="dashboard-header">
            <span>{user?.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <p>This is a protected page accessible only after configuration.</p>
      </div>
    </div>
  );
}
