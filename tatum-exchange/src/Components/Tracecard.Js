import React from 'react';

function TracdeCard({ order }) {
    return (
        <div className="trade-Card">
            <div className="trade-card-left">
                <h3>{order.type}</h3>
                <p>{order.amount}</p>
            </div>
            <div className="trade-card-right">
                <h3>{order.price}</h3>
                <p>{order.timestamp}</p>
            </div>
        </div>
    )
}

export default TracdeCard;