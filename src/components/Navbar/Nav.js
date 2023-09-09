import React from "react";
import "./Nav.css";
import { FaTruck } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";

import { BsBagCheck } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <div className="free">
        <div className="icon">
          <FaTruck />
        </div>
        <marquee behavior="scroll" direction="right">
          <p>FREE Shipping upto $1000</p>
        </marquee>
      </div>
      <div className="main-header">
        <div className="container">
          <div className="logo">
            <img src="./Images/logo.svg" alt="Loading..." />
          </div>
          <div className="search_box">
            <input
              type="text"
              value=""
              placeholder="Search Your Products......."
              autoComplete="off"
            />
            <button>Search</button>
          </div>
          <div className="icon">
            <div className="account">
              <div className="user_icon">
                <AiOutlineUser />
              </div>
              <p>Hello, user</p>
            </div>

            <AiOutlineHeart />
            <BsBagCheck />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
