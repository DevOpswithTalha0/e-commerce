import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>ShopCart</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - Rs {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;