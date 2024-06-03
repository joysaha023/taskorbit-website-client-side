import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { MdOndemandVideo } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import RedirectButton from "../../RedirectButton/RedirectButton";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handlelogout = () => {
    logOut().then((result) => {
      toast.error("LogOut");
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Tasks</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img className="w-full h-[40px] md:h-[60px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Tasks</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex">
              <div>
                <button className="btn">
                  Inbox
                  <div className="">+99</div>
                </button>
              </div>
              <div className="dropdown dropdown-hover dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  data-tooltip-place="left"
                >
                  <div className="w-10 rounded-full">
                    <img
                      title={user?.displayName}
                      alt="Tailwind CSS Navbar component"
                      src={
                        user?.photoURL || "https://i.ibb.co/6JyZF0K/user.png"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[20] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user?.displayName || "User"}
                    </a>
                  </li>
                </ul>
              </div>
              <Link to="/dashboard" className="btn">
                Dashboard
              </Link>
              <button
                onClick={handlelogout}
                className="btn btn-md rounded-full btn-error"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <RedirectButton videoUrl="https://www.youtube.com/watch?v=Dn_QYofxH34"></RedirectButton>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
