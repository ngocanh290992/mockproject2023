import React, { useEffect } from "react";
import "./Products.css";
import * as CONST from "../../constant/constant.js";
import * as action from "../../../redux/actions/action.js";

import { ModalEditProduct } from "../../../components/Modal/Product/ModalEditProduct.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Products = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const productList = state.productReducer.productList;

  const handleEditProduct = (e) => {
    dispatch(action.showEditProduct(e));
  };

  const handleDeleteProduct = (e) => {
    dispatch(action.deleteProduct(e));
  };

  useEffect(() => {
    console.log(productList);
  });

  return (
    <>
      <div className="d-flex justify-content-between py-2">
        <h1 className="h3 mb-2 text-gray-800">Products</h1>
        <button 
          className="btn btn-md btn-primary shadow-sm"
          type="button" 
          data-bs-toggle="modal" 
          data-bs-target="#isShowAddModalProduct"
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
                  placeholder="Search for name"
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
            <table className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Created date</th>
                  <th style={{width: '120px'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {productList && productList.map((e, i) => (
                  <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>${e.price}</td>
                    <td>{e.description}</td>
                    <td>
                      <img 
                        src={require(`../../../assets/products/${e.image}`)} 
                        className="product-image"
                        alt="" />
                    </td>
                    <td>{e.createDate}</td>
                    <td>
                      <button 
                        className="btn me-2" 
                        data-bs-toggle="modal" 
                        data-bs-target="#isShowEditModalProduct" 
                        onClick={() => handleEditProduct(e)}
                      >
                        <i className="fa-solid fa-pencil text-success"></i>
                      </button>
                      <button className="btn" onClick={() => handleDeleteProduct(e)}>
                        <i className="fa-solid fa-trash text-danger"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><Link className="page-link" href="#">Previous</Link></li>
              <li className="page-item"><Link className="page-link" href="#">1</Link></li>
              <li className="page-item"><Link className="page-link" href="#">2</Link></li>
              <li className="page-item"><Link className="page-link" href="#">3</Link></li>
              <li className="page-item"><Link className="page-link" href="#">Next</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <ModalEditProduct title='Edit New Product' type='isShowEditModalProduct'/>
    </>
  );
};
