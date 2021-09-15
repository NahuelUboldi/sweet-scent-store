const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const REMOVE_ALL = 'REMOVE_ALL';
const SHOW_CART = 'SHOW_CART';
const HIDE_CART = 'HIDE_CART';
const SET_INITIAL_ITEMS = 'SET_INITIAL_ITEMS';
const FILTER_ITEMS = 'FILTER_ITEMS';

export const addItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      item: item,
    });
  };
};
export const removeItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ITEM,
      item: item,
    });
  };
};
export const removeAll = () => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ALL,
    });
  };
};
export const showCart = () => {
  return (dispatch) => {
    dispatch({
      type: SHOW_CART,
    });
  };
};
export const hideCart = () => {
  return (dispatch) => {
    dispatch({
      type: HIDE_CART,
    });
  };
};
export const setInitialItems = (items) => {
  return (dispatch) => {
    dispatch({
      type: SET_INITIAL_ITEMS,
      products: [...items],
    });
  };
};

export const filterItems = (filterParam) => {
  return (dispatch) => {
    dispatch({
      type: FILTER_ITEMS,
      filterParam: filterParam,
    });
  };
};
