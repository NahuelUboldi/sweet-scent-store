import { combineReducers } from 'redux';
import cartReducer from './cartReducers';
import productsReducer from './productsReducer';

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default reducers;
