import * as TYPE from '../actions/type';

const initialState = {
  productList: [],
  productEdit: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.FETCH_LIST_PRODUCT:
      return { ...state, productList: action.payload };

    case TYPE.ADD_PRODUCT:
      const product = action.payload;
      const newProducts = state.productList;
      newProducts.push(product);
      return { ...state, productList: newProducts };

    case TYPE.EDIT_PRODUCT:
      const productUpdate = action.payload;
      const i = state.productList.findIndex(e => e.id === productUpdate.id);
      const newProductsUpdate = state.productList;
      newProductsUpdate.splice(i, 0, productUpdate);
      newProductsUpdate.splice(i + 1, 1);
      return { ...state, productList: newProductsUpdate };

    case TYPE.DELETE_PRODUCT:
      const productDel = action.payload;
      const newList = state.productList.filter(e => e.id !== productDel.id);
      return { ...state, productList: newList };

    case TYPE.SHOW_EDIT_PRODUCT:
      return { ...state, productEdit: action.payload };

    default:
      return state;
  }
};

export default productReducer;
