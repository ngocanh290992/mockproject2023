import React from "react";

export const ModalProduct = ({
  title,
  type,
}) => {
  return <>
    <div 
      className="modal fade modal-product" 
      id={type} tabIndex="-1" 
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
                <label className="form-label" htmlFor="form3Example1cg">
                  Your Name
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3cg">
                  Your Email
                </label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4cg">
                  Password
                </label>
                <input
                  className="form-control form-control-lg"
                  type="password"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4cdg">
                  Repeat your password
                </label>
                <input
                  className="form-control form-control-lg"
                  type="password"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </>;
};
