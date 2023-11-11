import * as TYPE from '../actions/type';

const initialState = {
  userList: [],
  userEdit: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.FETCH_LIST_USER:
      return { ...state, userList: action.payload };

    case TYPE.ADD_USER:
      const user = action.payload;
      const newUsers = state.userList;
      newUsers.push(user);
      return { ...state, userList: newUsers };

    case TYPE.EDIT_USER:
      const userUpdate = action.payload;
      const i = state.userList.findIndex(e => e.id === userUpdate.id);
      const newUsersUpdate = state.userList;
      newUsersUpdate.splice(i, 0, userUpdate);
      newUsersUpdate.splice(i + 1, 1);
      return { ...state, userList: newUsersUpdate };

    case TYPE.DELETE_USER:
      const userDel = action.payload;
      const newList = state.userList.filter(e => e.id !== userDel.id);
      return { ...state, userList: newList };

    case TYPE.SHOW_EDIT_USER:
      return { ...state, userEdit: action.payload };

    default:
      return state;
  }
};

export default userReducer;
