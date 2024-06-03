import React from "react";
import { NavLink } from "react-router-dom";
import WorkerBar from "../WorkerBar/WorkerBar";

const SideBar = () => {
  return (
    <div>
      <ul className="menu p-4">
        <WorkerBar></WorkerBar>
      <div className="divider"></div>
        <li>
          <NavLink to="/">
             Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/order/salad">
             Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/order/salad">
             Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
