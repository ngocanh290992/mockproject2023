import React, { useEffect } from "react";
import LeftMenu from "./LeftMenu/LeftMenu";
import { TopBar } from "./TopBar/TopBar";
import { routes } from "../../routes/Route";
import { ModalAddUser } from '../../components/Modal/User/ModalAddUser';
import { ModalProduct } from "../../components/Modal/Product/ModalProduct";
import { useDispatch } from "react-redux";
import * as action from "../../redux/actions/action";

export const Admin = () => {
  const dispatch = useDispatch();

  const onHandleAddUser = (e) => {
    dispatch(action.addUser(e));
  };

  useEffect(() => {
    dispatch(action.fetchUserListAPI());
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
      <ModalProduct title='Add New Product' type='isShowAddModalProduct' />
    </>
  );
};
