import React from "react";
import LeftMenu from "./LeftMenu/LeftMenu";
import { TopBar } from "./TopBar/TopBar";
import { Route, Switch } from "react-router";
import { DashBoard } from "./DashBoard.js/DashBoard";
import { Table } from "./Table/Table";
import { useSelector } from "react-redux";

export const Admin = () => {
  const { users, products, orders } = useSelector((state) => state);
  const admins = users.filter((user) => user.role === 0);
  const customers = users.filter((user) => user.role === 1);
  return (
    <>
      <LeftMenu />
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          <TopBar />
          {/* Begin Page Content */}
          <div className="container-fluid">
            <Switch>
              <Route path={"/"} exact>
                <DashBoard />
              </Route>
              <Route path={"/users"} exact>
                <Table title={"Users"} list={users} />
              </Route>
              <Route path={"/users/admin"} exact>
                <Table title={"List Admin"} list={admins} />
              </Route>
              <Route path={"/users/customer"} exact>
                <Table title={"List Customer"} list={customers} />
              </Route>
              <Route path={"/products"} exact>
                <Table title={"Products"} list={products} />
              </Route>
              <Route path={"/products/collections"} exact>
                <Table title={"Collections"} list={products} />
              </Route>
              <Route path={"/products/inventory"} exact>
                <Table title={"Inventory"} list={products} />
              </Route>
              <Route path={"/orders"} exact>
                <Table title={"Orders"} />
              </Route>
              <Route path={"/orders/drafts"} exact>
                <Table title={"Drafts"} />
              </Route>
            </Switch>
          </div>
          {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}
        {/* Footer */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Mock 2309 - Team 2 - 2023</span>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
      </div>
      {/* End of Content Wrapper */}
    </>
  );
};
