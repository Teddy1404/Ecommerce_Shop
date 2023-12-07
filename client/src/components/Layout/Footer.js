import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className=" text-white  sm:text-3xl  font-semibold flex flex-col justify-center   "
      style={{ backgroundColor: "#83A2FF" }}
    >
      <h1 className="text-center mt-2"> All Rights Reserved @Aryan⭐</h1>
      <p className=" m-5 flex justify-center text-sm ">
        <Link to="/about" className="mr-2 ml-2">
          About
        </Link>
        |
        <Link to="/contact" className="mr-2 ml-2">
          Contact
        </Link>
        |
        <Link to="/policy" className="mr-2 ml-2">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
