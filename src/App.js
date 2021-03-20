import Another from './Another';
import Cart from './Cart';
import AxiosPlayground from './AxiosPlayground';

const listOfProducts = [
  { id: 1, name: 'Bananas', price: 1.15, quantity: 0 },
  { id: 2, name: 'Apples', price: 2.10, quantity: 0 },
  { id: 3, name: 'Pears', price: 1.75, quantity: 0 }
]

function App() {
  const num = Math.random() * 10;
  const someObs = {
    name: 'Paxton',
    age: 33
  }
  return (
    <div className="App">
      <h1>num {num < 3 ? 'Smaller' : 'Bigger'}</h1>
      <Another yay={someObs} />
      <Cart listOfProducts={listOfProducts} />
      <AxiosPlayground />
    </div>
  );
}

export default App;
