const defaultState = {
  prods: [],
  filterParam: 'all',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_INITIAL_ITEMS':
      console.log('set initial items');
      return { ...state, prods: [...action.products] };
    case 'FILTER_ITEMS':
      console.log('filter items');
      return { ...state, filterParam: action.filterParam };
    default:
      return state;
  }
};

export default reducer;
