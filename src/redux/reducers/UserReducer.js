const initialState = {
  user: {
    id: 1,
    name: "Alex",
  },
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default UserReducer;
