import React, { useEffect } from "react";
import LeftMenu from "./LeftMenu/LeftMenu";
import { TopBar } from "./TopBar/TopBar";
import { routes } from "../../routes/Route";
import { ModalAddUser } from '../../components/Modal/User/ModalAddUser';
import { ModalAddProduct } from "../../components/Modal/Product/ModalAddProduct";
import { useDispatch } from "react-redux";
import * as action from "../../redux/actions/action";

const Admin = () => {
  const dispatch = useDispatch();

  const onHandleAddUser = (e) => {
    dispatch(action.addUser(e));
  };

  const onHandleAddProduct = (e) => {
    dispatch(action.addProductAPI(e));
  };

  useEffect(() => {
    dispatch(action.fetchUserListAPI());
    dispatch(action.fetchProductListAPI());
  }, [dispatch]);

  return (
    <>
      <LeftMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid">{routes}</div>
        </div>
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Mock 2309 - Team 2 - 2023</span>
            </div>
          </div>
        </footer>
      </div>

      <ModalAddUser 
        title='Add New User' 
        type='isShowAddModalUser' 
        onHandleAddUser={onHandleAddUser} 
      />

      <ModalAddProduct 
        title='Add New Product' 
        type='isShowAddModalProduct' 
        onHandleAddProduct={onHandleAddProduct}
      />
    </>
  );
};

export default Admin;