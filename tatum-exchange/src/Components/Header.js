import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/"><h1>DEX</h1></Link>
        <nav>
          <Link to="/order-book">Order Book</Link>
          <Link to="/trade-history">Trade History</Link>
          <Link to="/user-profile">My Profile</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
