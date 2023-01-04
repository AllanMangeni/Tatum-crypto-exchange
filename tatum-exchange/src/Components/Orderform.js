import React, { useState } from 'react';

function OrderForm() {
  const [formData, setFormData] = useState({
    type: 'BUY',
    price: '',
    amount: '',
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Validate form data and submit order to API
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type:
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="BUY">Buy</option>
          <option value="SELL">Sell</option>
        </select>
      </label>
      <br />
      <label>
        Price:
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit Order</button>
    </form>
  );
}

export default OrderForm;
