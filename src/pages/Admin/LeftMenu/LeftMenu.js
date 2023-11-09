import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LeftMenu() {
  const [isToggled, setIsToggled] = useState(false);
  const [isUsers, setIsUsers] = useState(false);
  const [isProducts, setIsProducts] = useState(false);
  const [isOrders, setIsOrders] = useState(false);
  return (
    <ul
      className={
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" +
        (isToggled ? " toggled" : " ")
      }
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to={"/"}
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">ADMIN</div>
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <Link className="nav-link" to={"/"}>
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Nav Item - Users Collapse Menu */}
      <li className="nav-item" onClick={() => setIsUsers(!isUsers)}>
        <Link
          className={"nav-link" + (isUsers ? " " : " collapsed")}
          to={"/users"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded={isUsers}
          aria-controls="collapseTwo"
        >
          <i class="fa-regular fa-user"></i>
          <span>Users</span>
        </Link>
        <div
          id="collapseTwo"
          className={"collapse" + (isUsers ? " show" : "")}
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to={"/users/admin"}>
              List Admin
            </Link>
            <Link className="collapse-item" to={"/users/customer"}>
              List Customer
            </Link>
          </div>
        </div>
      </li>
      {/* Nav Item - Products Collapse Menu */}
      <li className="nav-item" onClick={() => setIsProducts(!isProducts)}>
        <Link
          className={"nav-link" + (isProducts ? " " : " collapsed")}
          to={"/products"}
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded={isProducts}
          aria-controls="collapseUtilities"
        >
          <i class="fa-solid fa-shirt"></i>
          <span>Products</span>
        </Link>
        <div
          id="collapseUtilities"
          className={"collapse" + (isProducts ? " show" : "")}
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to={"/products/collections"}>
              Collections
            </Link>
            <Link className="collapse-item" to={"/products/inventory"}>
              Inventory
            </Link>
          </div>
        </div>
      </li>
      {/* Nav Item - Orders */}
      <li className="nav-item" onClick={() => setIsOrders(!isOrders)}>
        <Link
          className={"nav-link" + (isOrders ? " " : " collapsed")}
          to={"/orders"}
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded={isOrders}
          aria-controls="collapseUtilities"
        >
          <i class="fa-solid fa-box-open"></i>
          <span>Orders</span>
        </Link>
        <div
          id="collapseUtilities"
          className={"collapse" + (isOrders ? " show" : "")}
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to={"/orders/drafts"}>
              Drafts
            </Link>
          </div>
        </div>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={() => setIsToggled(!isToggled)}
        />
      </div>
    </ul>
  );
}
