import React from "react";
import { NavLink } from "react-router-dom";
import WorkerBar from "../WorkerBar/WorkerBar";
import CreatorBar from "../CreatorBar/CreatorBar";
import AdminBar from "../AdminBar/AdminBar";
import useRole from "../../../Hooks/useRole";

const SideBar = () => {
const [role] = useRole();
console.log(role)
  return (
    <div>
      <ul className="menu p-4 space-y-2">

        {role === 'worker' && <WorkerBar></WorkerBar>}
        {role === 'TaskCreator' && <CreatorBar></CreatorBar>}
        {role === 'admin' && <AdminBar></AdminBar>}


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
