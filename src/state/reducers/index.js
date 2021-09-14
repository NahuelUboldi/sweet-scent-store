import { combineReducers } from 'redux';
import cartReducer from './cartReducers';

const reducers = combineReducers({
  cart: cartReducer,
});

export default reducers;
