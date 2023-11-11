import { fetchUserList } from '../../api';
import * as TYPE from './type';

export const fetchUserListAPI = () => {
  return async (dispatch) => {
    const res = await fetchUserList();
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
