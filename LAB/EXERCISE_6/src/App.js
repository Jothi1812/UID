import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import './components/Form.css';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="App">
      <h1>Item List</h1>
      <ItemForm onAddItem={addItem} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
