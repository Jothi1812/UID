import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../productData';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Update the filteredProducts whenever searchTerm changes
  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]); // Run this effect when searchTerm changes

  return (
    <div>
      <h2>Welcome to Poorvika Store</h2>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)} // Capture input changes
        style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
      />
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
