import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../productData';

const Product = () => {
  const { id } = useParams();
  const product = products.find(item => item.id === parseInt(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <input 
        type="number" 
        value={quantity} 
        min="1" 
        onChange={(e) => setQuantity(Number(e.target.value))} 
        style={{ width: '50px', marginRight: '10px' }}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
