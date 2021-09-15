import './App.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { client } from './client';

function App() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { addItem, removeItem, removeAll, showCart, hideCart } =
    bindActionCreators(actionCreators, dispatch);

  const [products, setProducts] = useState([]);
  const getProds = async () => {
    const response = await client.getEntries({
      content_type: 'scentEcommerceProducts',
    });
    setProducts(response);
  };

  useEffect(() => {
    getProds();
  }, []);

  console.log(products);
  return (
    <div className='App'>
      <h1>app</h1>
      <button onClick={() => addItem('hola')}>add item</button>
      <button onClick={() => removeItem('hola')}>remove item</button>

      <button onClick={() => removeAll()}>remove all</button>

      <button onClick={() => showCart()}>show</button>

      <button onClick={() => hideCart()}>hide</button>
    </div>
  );
}

export default App;
