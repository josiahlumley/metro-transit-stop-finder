import React from "react";

import Logo from "./Logo";
import "../App.css";

export default function Header() {
  return (
    <div className="header-container">
        <Logo />
        <h1 className="header-text">Metro Transit Stop Finder</h1>
    </div>
  );
}