import React from "react";
import { useHistory } from "react-router-dom";

import logo from "../images/metro_transit.jpg";
import "../App.css";

export default function Logo() {
  const history = useHistory();

  return (
    <img
      className="logo"
      src={logo}
      alt="Logo"
      onClick={() => history.push("/")}
    />
  );
}
