import './App.css';
import { useState } from 'react';
import ProductList from './components/ProductList';
/*

Vários itens "https://api.mercadolibre.com/sites/MLB/search?q=$QUERY"

1 item "https://api.mercadolibre.com/items/$ItemID"

*/
function App() {

  const [products, setProducts] = useState([]);

  fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
    .then(response => response.json())
    .then(({ results }) => setProducts(results))
    .catch(console.log)
  if (!products.length) {
    return <p>Loading</p>
  }
  return (
    <div className="App">
      <ProductList products={products}></ProductList>
    </div>
  );
}

export default App;
