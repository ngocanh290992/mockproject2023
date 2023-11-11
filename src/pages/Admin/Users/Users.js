import React, { useEffect} from "react";
import "./User.css";
import * as CONST from "../../constant/constant.js";
import * as action from "../../../redux/actions/action.js";

import { ModalEditUser } from '../../../components/Modal/User/ModalEditUser.js';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { formatDate } from "../../../utils/index.js";
import { Link } from "react-router-dom";

export const Users = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const userList = state.userReducer.userList;

  const handleEditUser = (e) => {
    dispatch(action.showEditUser(e))
  };

  const handleDeleteUser = (e) => {
    dispatch(action.deleteUser(e));
  };

  useEffect(() => {});

  return (
    <>
      <div className="d-flex justify-content-between py-2">
        <h1 className="h3 mb-2 text-gray-800">Users</h1>
        <button 
          type="button" 
          className="btn btn-primary" 
          data-bs-toggle="modal" 
          data-bs-target="#isShowAddModalUser"
        >{CONST.ADD_USER}</button>
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
                  <th>Email</th>
                  <th>Created date</th>
                  <th style={{width: '120px'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {userList && userList.map((e, i) => (
                  <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{formatDate(e.createdAt)}</td>
                    <td>
                      <button 
                        className="btn me-2" 
                        data-bs-toggle="modal" 
                        data-bs-target="#isShowEditModalUser" 
                        onClick={() => handleEditUser(e)}
                      >
                        <i className="fa-solid fa-pencil text-success"></i>
                      </button>
                      <button className="btn" onClick={() => handleDeleteUser(e)}>
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

      <ModalEditUser title='Edit New User' type='isShowEditModalUser' />
    </>
  );
};
