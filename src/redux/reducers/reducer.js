import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import productReducer from './ProductReducer';

const rootReducer = combineReducers({
  userReducer,
  productReducer,
});

export default rootReducer;
