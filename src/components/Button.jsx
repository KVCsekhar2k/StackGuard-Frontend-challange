import React from "react";
import "./Button.css"

export default function Button({ text, onClick, type = "submit", color = "black" }) {
  return (
    <button className="form-button" type={type} onClick={onClick} style={{ background: color }}>
      {text}
    </button>
  );
}
