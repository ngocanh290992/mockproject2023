import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages/Admin/DashBoard.js/DashBoard";
import { Users } from "../pages/Admin/Users/Users";
import { Products } from "../pages/Admin/Products/Products";

export const routes = (
  <Routes>
    <Route path="/" element={<DashBoard />} exact />
    <Route path={"/users"} element={<Users />} exact />
    <Route path={"/products"} element={<Products />} exact />
  </Routes>
);