import React, { useState } from "react";

export const ModalAddUser = ({
  type,
  title,
  onHandleAddUser,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    const newUser = {
      name: name,
      email: email,
      password: password,
      createdAt: Date.now(),
    };
    onHandleAddUser(newUser);
  }

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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Your Email</label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                <input
                  className="form-control form-control-lg"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleSave}
              disabled={name === '' || email === '' || password === '' ? true : false}
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </>;
};
