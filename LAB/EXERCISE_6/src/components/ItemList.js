import React from 'react';

function ItemList({ items }) {
  return (
    <div className="item-list">
      <h2>Item Items</h2> {/* Added heading for ItemList */}
      {items.length === 0 ? (
        <p>No items added yet.</p> // Message if no items are present
      ) : (
        items.map((item, index) => (
          <div key={index} className="item">
            <strong>{item.name}</strong>
            <span>{item.description}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price per Item: ${item.price.toFixed(2)}</span>
            <p>Total Amount: ${item.totalAmount.toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ItemList;
