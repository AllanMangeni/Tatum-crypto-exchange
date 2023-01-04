import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import OrderBook from './OrderBook';
import TradeHistory from './TradeHistory';
import UserProfile from './UserProfile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order-book" component={OrderBook} />
        <Route path="/trade-history" component={TradeHistory} />
        <Route path="/user-profile" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
