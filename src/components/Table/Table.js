import React from "react";
import "./Table.css";
import * as CONST from "../../constant/constant.js";

export const Table = ({ title, list }) => {
  const renderTheAd = () => {
    switch (title) {
      case "Users": {
        return (
          <tr>
            <th>Role</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>Email</th>
            <th>Address</th>
            <th>Orders</th>
            <th>Amount spent</th>
            <th>Action</th>
          </tr>
        );
      }
      case "Products": {
        return (
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Create Date</th>
            <th>Action</th>
          </tr>
        );
      }
      default:
        return <tr></tr>;
    }
  };

  const renderAmountSpent = (orders) => {
    let amountSpent = 0;
    orders.map((order) => {
      return order.lineItems.map((item) => {
        amountSpent += item.price * item.quality;
        return "";
      });
    });
    return amountSpent;
  };

  const renderTBody = () => {
    switch (title) {
      case "Users": {
        return list.map((item, index) => {
          return (
            <tr key={index}>
              <td className={item.role === 0 ? "text-warning fw-bold" : ""}>
                {item.role === 0 ? "Admin" : "Customer"}
              </td>
              <td>{item.name}</td>
              <td>
                <img
                  src={item.avatar}
                  alt={"avatar" + item.id}
                  width={50}
                  height={50}
                />
              </td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>
                {item.orders.length}
                {item.orders.length > 1 ? " orders" : " order"}
              </td>
              <td className="fw-bold">$ {renderAmountSpent(item.orders)}</td>
              <td>
                <button className="btn me-2">
                  <i className="fa-solid fa-pencil text-success"></i>
                </button>
                <button className="btn ">
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
              </td>
            </tr>
          );
        });
      }
      case "Products": {
        return list.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.title}</td>
              <td>
                <img src={item.image} alt={item.title} width={50} height={50} />
              </td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.createDate}</td>
              <td>
                <button className="btn me-2">
                  <i className="fa-solid fa-pencil text-success"></i>
                </button>
                <button className="btn ">
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
              </td>
            </tr>
          );
        });
      }
      default:
        return <tr></tr>;
    }
  };

  const handleAddUser = () => {};

  return (
    <>
      <div>
        <div className="d-flex justify-content-between py-2">
          <h1 className="h3 mb-2 text-gray-800">{title}</h1>
          <button 
            className="btn btn-md btn-primary shadow-sm"
            onClick={handleAddUser}
          >{CONST.ADD_USER}</button>
        </div>

        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="py-3">
              <form className="d-none d-sm-inline-block form-inline ml-auto  my-2 my-md-0 mw-50 w-50 navbar-search">
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing={0}
              >
                <thead>{renderTheAd()}</thead>
                <tbody>{renderTBody()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
