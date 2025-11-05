import React from "react";
import "./Layout.css";

export default function Layout({ children, leftImage }) {
  return (
    <div className="layout">
      <div className="left-panel">
        <img src={leftImage} alt="preview" />
      </div>
      <div className="right-panel">{children}</div>
    </div>
  );
}
