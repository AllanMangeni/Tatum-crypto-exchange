import React, {useState, useEffect } from 'react';

import TradeCard from './TradeCard';

function TradeHistory() {
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        // Fetch list of past trades from Tatum API
        fetch('/api/trades')
        .then(response => response.json())
        .then(data => setTrades(data));
    }, []);

    return (
        <div>
            <h2> Trade History</h2>
            <div className="trade-history">
                {trades.map(trade => (
                    <TradeCard key={trade.id} trade={trade} />
                ))}
            </div>
        </div>
    );
}


export default TradeHistory;