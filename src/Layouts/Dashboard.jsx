import React from "react";
import { Link, Outlet } from "react-router-dom";
import SideBar from "../Pages/Dashboard/SideBar/SideBar";
import logo from "../assets/logo.png";
import useRole from "../Hooks/useRole";
import Footer from "../Components/Shared/Footer/Footer";


const Dashboard = () => {
const [data] = useRole()



  return (
    <div>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                
              </ul>
            </div>
            <Link to="/">
              <img className="w-full h-[40px] md:h-[60px]" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1"></ul>
          </div>
          <div className="navbar-end">
            <div className="border rounded-3xl p-2 bg-blue-300">
              <h2>coin: {data?.coin} </h2>
            </div>
            <div className="px-4">
              <div className="avatar ">
                <div className="w-10 rounded-full">
                  <img
                    src={data?.image}
                    alt="Tailwind-CSS-Avatar-component"
                  />
                </div>
                
              </div>
            </div>
            <div>
                <h2 className="text-base">{data?.name}</h2>
                <h2 className="text-sm">{data?.role}</h2>
            </div>
            <div className=" px-4">
              <div className="indicator ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-orange-400">
          <SideBar></SideBar>
        </div>

        {/* Outlet --> Dynamic content */}
        <div className="flex-1">
          <Outlet></Outlet>
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
