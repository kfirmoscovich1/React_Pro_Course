import React, { useState } from 'react';

export default function Task2() {
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState(0);

  // שערים לדוגמה
  const rates = {
    USD: 3.6,
    EUR: 3.9,
    THB: 0.1, // באט תאילנדי, לדוגמה
  };

  // פונקציה לחישוב העלות בש"ח
  const getCostInNIS = () => {
    if (!rates[currency]) return 0;
    return amount * rates[currency];
  };

  return (
    <div style={{ margin: '20px' }}>
      <h3>Enter the currency you want to exchange:</h3>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="THB">Baht</option>
      </select>

      <h3>Enter the amount you want:</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <p>It will cost you {getCostInNIS()} NIS</p>
    </div>
  );
}
