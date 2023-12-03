import * as api from '../../api';
import * as TYPE from './type';

// USER
export const fetchUserListAPI = () => {
  return async (dispatch) => {
    const res = await api.fetchUserList();
    dispatch(getListUser(res));
  };
};

export const getListUser = (data) => {
  return {
    type: TYPE.FETCH_LIST_USER,
    payload: data,
  };
};

export const addUser = (data) => {
  return {
    type: TYPE.ADD_USER,
    payload: data,
  };
};

export const updateUser = (data) => {
  return {
    type: TYPE.EDIT_USER,
    payload: data,
  };
};

export const showEditUser = (data) => {
  return {
    type: TYPE.SHOW_EDIT_USER,
    payload: data,
  };
};

export const deleteUser = (data) => {
  return {
    type: TYPE.DELETE_USER,
    payload: data,
  };
};

// PRODUCT
export const fetchProductListAPI = () => {
  return async (dispatch) => {
    const res = await api.fetchProductList();
    dispatch(getListProduct(res));
  };
};

export const getListProduct = (data) => {
  return {
    type: TYPE.FETCH_LIST_PRODUCT,
    payload: data,
  };
};

export const addProductAPI = (data) => {
  return async (dispatch) => {
    const res = api.createProductAPI(data);
    dispatch(addProduct(res));
    dispatch(fetchProductListAPI());
  };
};

export const addProduct = (data) => {
  return {
    type: TYPE.ADD_PRODUCT,
    payload: data,
  };
};

export const updateProduct = (data) => {
  return {
    type: TYPE.EDIT_PRODUCT,
    payload: data,
  };
};

export const showEditProduct = (data) => {
  return {
    type: TYPE.SHOW_EDIT_PRODUCT,
    payload: data,
  };
};

export const deleteProduct = (data) => {
  return {
    type: TYPE.DELETE_PRODUCT,
    payload: data,
  };
};