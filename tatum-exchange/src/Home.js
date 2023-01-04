import React from 'react';

import Header from './Header';
import OrderBook from './OrderBook';
import TradeHistory from './TradeHistory';

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Welcome to the DEX!</h1>
        <p>Here you can buy and sell cryptocurrency using your Algorand wallet.</p>
        <OrderBook />
        <TradeHistory />
      </div>
    </div>
  );
}

export default Home;
