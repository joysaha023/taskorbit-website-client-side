import React from "react";
import { NavLink } from "react-router-dom";
import WorkerBar from "../WorkerBar/WorkerBar";
import CreatorBar from "../CreatorBar/CreatorBar";
import AdminBar from "../AdminBar/AdminBar";
import useRole from "../../../Hooks/useRole";

const SideBar = () => {
  const [data] = useRole();
 
  return (
    <div>
      <ul className="menu p-4 space-y-2">
        {data?.role === "TaskCreator" && <CreatorBar></CreatorBar>}
        {data?.role === "worker" && <WorkerBar></WorkerBar>}
        {data?.role === "admin" && <AdminBar></AdminBar>}

        <div className="divider"></div>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/order/salad">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/order/salad">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
