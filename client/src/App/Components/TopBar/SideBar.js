import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <Menu>
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/Toys">Toys</Link>
      <Link className="menu-item" to="/Cars">Cars</Link>
      <Link className="menu-item" to="/Property">Property</Link>
      <Link className="menu-item" to="/Electronics">Electronics</Link>
  </Menu>
  )
}

export default SideBar;
