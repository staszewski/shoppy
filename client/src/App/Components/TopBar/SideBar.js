import React from "react";
import { slide as Menu } from "react-burger-menu";

const SideBar = (props) => {
  return (
    <Menu>
    <a className="menu-item" href="/">
      Home
    </a>

    <a className="menu-item" href="/Toys">
      Toys
    </a>

    <a className="menu-item" href="/Cars">
      Cars
    </a>
    
    <a className="menu-item" href="/Property">
    Property
    </a>
    
    <a className="menu-item" href="/Electronics">
    Electronics
    </a>
  </Menu>
  )
}

export default SideBar
