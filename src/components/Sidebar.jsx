import React from "react";
import { Menu } from "./Menu";

export function Sidebar() {
  return (
    <div className="sidebar menu menu-dark accordion d-block">
      <Menu />
    </div>
  );
}

export default Sidebar;
