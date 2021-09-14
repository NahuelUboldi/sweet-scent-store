const defaultState = {
  showCart: false,
  items: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('add item');
      return state;
    case 'REMOVE_ITEM':
      console.log('remove item');
      return state;
    case 'REMOVE_ALL':
      console.log('remove all');
      return { ...state, items: [] };
    case 'SHOW_CART':
      console.log('show cart');
      return { ...state, showCart: true };
    case 'HIDE_CART':
      console.log('hide cart');
      return { ...state, showCart: false };
    default:
      return state;
  }
};

export default reducer;
