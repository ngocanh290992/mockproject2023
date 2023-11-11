import React from "react";
import "./Products.css";
import * as CONST from "../../constant/constant.js";
import { ModalProduct } from '../../../components/Modal/Product/ModalProduct.js';

export const Products = () => {
  const handleAddProduct = () => {};

  const handleEditProduct = (e) => {};

  return (
    <>
      <div className="d-flex justify-content-between py-2">
        <h1 className="h3 mb-2 text-gray-800">Products</h1>
        <button 
          className="btn btn-md btn-primary shadow-sm"
          type="button" 
          data-bs-toggle="modal" 
          data-bs-target="#isShowAddModalProduct"
          onClick={handleAddProduct}
        >{CONST.ADD_PRODUCT}</button>
      </div>

      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="py-3">
            <form className="d-sm-inline-block form-inline ml-auto my-2 my-md-0 mw-50 w-50 navbar-search">
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
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Create Date</th>
                  <th style={{width: '120px'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>
                    <button 
                      className="btn me-2" 
                      data-bs-toggle="modal" 
                      data-bs-target="#isShowEditModalProduct" 
                      onClick={(e) => handleEditProduct(e)}
                    >
                      <i className="fa-solid fa-pencil text-success"></i>
                    </button>
                    <button className="btn ">
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ModalProduct title='Edit New Product' type='isShowEditModalProduct'/>
    </>
  );
};
