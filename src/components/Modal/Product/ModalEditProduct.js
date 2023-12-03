import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from "../../../redux/actions/action";

export const ModalEditProduct = ({
  title,
  type,
}) => {
  const state = useSelector((state) => state);
  const product = state.productReducer.productEdit;
  const dispatch = useDispatch();

  const [nameEdit, setNameEdit] = useState('');
  const [inforEdit, setInfoEdit] = useState('');
  const [detailEdit, setDetailEdit] = useState('');
  const [priceEdit, setPriceEdit] = useState('');
  const [imageEdit, setImageEdit] = useState('');

  const handleEdit = () => {
    const editProduct = {
      id: product.id,
      name: nameEdit,
      info: inforEdit,
      detail: detailEdit,
      price: priceEdit,
      createdAt: Date.now(),
    };
    dispatch(action.updateProduct(editProduct));
  };

  useEffect(() => {
    setNameEdit(product.name);
    setInfoEdit(product.info);
    setDetailEdit(product.detail);
    setPriceEdit(product.price);
  }, [product.detail, product.info, product.name, product.price]);

  return (
    <>
      <div 
        className="modal fade modal-product" 
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
                  <label className="form-label">Name</label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    value={nameEdit}
                    onChange={(e) => setNameEdit(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label">Info</label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    value={inforEdit}
                    onChange={(e) => setInfoEdit(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label">Detail</label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    value={detailEdit}
                    onChange={(e) => setDetailEdit(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label">Name</label>
                  <input
                    className="form-control form-control-lg"
                    type="number"
                    value={priceEdit}
                    onChange={(e) => setPriceEdit(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label">Image</label>
                <input
                  className="form-control form-control-lg"
                  type="file"
                  value={imageEdit}
                  onChange={(e) => setImageEdit(e.target.value)}
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
    </>
  );
}