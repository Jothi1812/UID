import React, { useState } from 'react';

function ItemForm({ onAddItem }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalAmount = quantity * price;

    // Pass item with total amount to the parent
    onAddItem({ name, description, quantity, price, totalAmount });

    // Reset form fields
    setName('');
    setDescription('');
    setQuantity(1);
    setPrice(0);
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item Name"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      ></textarea>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        placeholder="Quantity"
        min="1"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        placeholder="Price per Item"
        step="0.01"
        min="0"
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
