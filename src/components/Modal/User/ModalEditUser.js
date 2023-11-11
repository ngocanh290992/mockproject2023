import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as action from "../../../redux/actions/action";
import { useSelector } from "react-redux";

export const ModalEditUser = ({
  type,
  title,
}) => {
  const state = useSelector((state) => state);
  const user = state.userReducer.userEdit;
  const dispatch = useDispatch();
  const [nameEdit, setNameEdit] = useState('');
  const [emailEdit, setEmailEdit] = useState('');
  const [passwordEdit, setPasswordEdit] = useState('');

  const handleEdit = () => {
    console.log(user);
    const editUser = {
      id: user.id,
      name: nameEdit,
      email: emailEdit,
      password: passwordEdit,
      createdAt: Date.now(),
    };
    dispatch(action.updateUser(editUser));
  };

  useEffect(() => {
    setNameEdit(user.name);
    setEmailEdit(user.email);
    setPasswordEdit(user.password);
  }, [user.email, user.name, user.password]);

  return <>
    <div 
      className="modal fade modal-user" 
      id={type} 
      tabIndex="-1" 
      aria-labelledby="exampleModalLabel" 
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-outline mb-4">
                <label className="form-label">Your Name</label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  value={nameEdit}
                  onChange={(e) => setNameEdit(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Your Email</label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  value={emailEdit}
                  onChange={(e) => setEmailEdit(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                <input
                  className="form-control form-control-lg"
                  type="password"
                  value={passwordEdit}
                  onChange={(e) => setPasswordEdit(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              data-bs-dismiss="modal"
            >Close</button>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={handleEdit}
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </>;
};
