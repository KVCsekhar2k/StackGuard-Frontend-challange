import React from "react";
import "./Input.css"
export default function Input({ placeholder, type = "text", value, onChange }) {
  return (
    <input
      className="form-input"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      required
    />
  );
}
