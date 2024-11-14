import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

  return (
    <header className="header" style={{padding:'20px',fontSize:'20px'}}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
