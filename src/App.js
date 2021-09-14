import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

function App() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(state);
  const { addItem, removeItem, removeAll, showCart, hideCart } =
    bindActionCreators(actionCreators, dispatch);
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
