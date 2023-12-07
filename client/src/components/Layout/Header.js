/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { close, menu } from "../assets";
import Menu from "../../images/menu.png";
import toast from "react-hot-toast";
import Close from "../../images/close-button-png-30238.png";
import { navLinks } from "./constants/index";
import logo from "../../images/pngwing.com.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import "../../App.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,700;1,700&family=Libre+Baskerville&family=Playpen+Sans:wght@800&display=swap');
</style>;
const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <nav
      className=" w-full flex py-6 justify-between items-center navbar  "
      style={{
        backgroundColor: "white",
        boxShadow: "0 8px 6px -6px gray",
        borderBottom: "0.5px solid gray",
        fontFamily: "IBM Plex Serif",
      }}
    >
      <img src={logo} alt="hoobank" className="w-[200px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="font-poppins font-medium cursor-pointer text-[16px] mr-10 active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="font-poppins font-medium cursor-pointer text-[16px] mr-10">
          <NavLink to="/category">Category</NavLink>
        </li>
        {!auth.user ? (
          <>
            <li className="font-poppins font-medium cursor-pointer text-[16px]  mr-10">
              <NavLink to="/register">Register</NavLink>
            </li>
            <li className="font-poppins font-medium cursor-pointer text-[16px]  mr-10">
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="font-poppins font-medium cursor-pointer text-[16px]  mr-10">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  style={{ border: "none" }}
                >
                  {auth?.user?.name}
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                      className="dropdown-item"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-center ml-4"
                      onClick={handleLogout}
                      to="/login"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </li>
            </li>
          </>
        )}
        <li className="font-poppins font-medium cursor-pointer text-[16px]  mr-10">
          <NavLink to="/dashboard">Cart ({0})</NavLink>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? Close : Menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar  bg-white`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mt-10">
              <NavLink to="/category">Category</NavLink>
            </li>
            {!auth.user ? (
              <>
                <li className="mt-10">
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li className="mt-10">
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="mt-10">
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="ml-4"
                          onClick={handleLogout}
                          to="/login"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </li>
              </>
            )}
            <li className="mt-10">
              <NavLink to="/">Dashboard</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
