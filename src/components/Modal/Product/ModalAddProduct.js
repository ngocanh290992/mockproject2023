import React, { useState } from "react";
import { getImageName } from "../../../utils/index";

export const ModalAddProduct = ({
  title,
  type,
  onHandleAddProduct,
}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSave = () => {
    const newProduct = {
      name: name,
      description: description,
      price: price,
      image: getImageName(image),
      createdAt: Date.now(),
    };
    onHandleAddProduct(newProduct);
  }

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
                <label className="form-label">Title</label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Description</label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Price</label>
                <input
                  className="form-control form-control-lg"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Image</label>
                <input
                  className="form-control form-control-lg"
                  type="file"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
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
              disabled={
                name === '' || 
                price === '' || 
                description === '' || 
                price === '' || 
                image === '' 
                  ? true 
                  : false
              }
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </>;
};
