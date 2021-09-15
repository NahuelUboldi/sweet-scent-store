import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { client } from './client';

const state = useSelector((state) => state.cart);
const dispatch = useDispatch();
const { addItem, removeItem, removeAll, showCart, hideCart, setInitialItems } =
  bindActionCreators(actionCreators, dispatch);

const getProds = async () => {
  const response = await client.getEntries({
    content_type: 'scentEcommerceProducts',
  });
  setInitialItems(response.items);
};

useEffect(() => {
  getProds();
}, []);
