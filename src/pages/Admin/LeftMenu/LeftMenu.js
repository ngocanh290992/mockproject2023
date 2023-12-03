import React from "react";
import "./LeftMenu.css";
import * as CONST from "../../constant/constant.js";
import { NavLink } from "react-router-dom";

export default function LeftMenu() {

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <NavLink
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to={"/"}
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">{ CONST.ADMIN }</div>
      </NavLink>
      <hr className="sidebar-divider" />

      <li className="nav-item">
        <NavLink
          className="nav-link"
          to={"/users"}
        >
          <span><i className="fa-regular fa-user icon-link"></i></span>
          <span>Users</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          className="nav-link"
          to={"/products"}
        >
          <span><i className="fa-solid fa-shirt"></i></span>
          <span>Products</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          className="nav-link"
          to={"/orders"}
        >
          <span><i className="fa-solid fa-box-open"></i></span>
          <span>Orders</span>
        </NavLink>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}
