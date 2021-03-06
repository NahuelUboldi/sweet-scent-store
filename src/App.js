import './App.css';
import { useEffect } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
//contentful api
import { client } from './client';
//components
import Header from './components/Header';
import Trending from './components/Trending';
import Products from './components/Products';

function App() {
  const products = useSelector((state) => state.products.prods);
  const dispatch = useDispatch();
  const {
    addItem,
    removeItem,
    removeAll,
    showCart,
    hideCart,
    setInitialItems,
  } = bindActionCreators(actionCreators, dispatch);

  const getProds = async () => {
    const response = await client.getEntries({
      content_type: 'scentEcommerceProducts',
    });
    setInitialItems(response.items);
  };
  useEffect(() => {
    getProds();
  }, []);

  return (
    <div className='App'>
      <div className='bg-stripe'></div>
      <Header />
      <main>
        <Trending />
        <Products />
      </main>
      <h1>app</h1>
      <button onClick={() => addItem('hola')}>add item</button>
      <button onClick={() => removeItem('hola')}>remove item</button>

      <button onClick={() => removeAll()}>remove all</button>

      <button onClick={() => showCart()}>show</button>

      <button onClick={() => hideCart()}>hide</button>
      {products.map((prod) => {
        return <h2>{prod.fields.title}</h2>;
      })}
    </div>
  );
}

export default App;
