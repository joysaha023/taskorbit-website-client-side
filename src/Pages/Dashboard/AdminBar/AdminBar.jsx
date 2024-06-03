import React from "react";
import { NavLink } from "react-router-dom";

const AdminBar = () => {
  return (
    <div className="space-y-2">
      <li>
        <NavLink to="/dashboard/adminHome">My Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageUser">Manage Users</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageTask">Manage Task</NavLink>
      </li>
    </div>
  );
};

export default AdminBar;
