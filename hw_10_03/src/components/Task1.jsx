import React, { useState } from 'react';

export default function Task1() {
  const [count, setCount] = useState(0);

  // הגדלת הערך ב-1 עד 5, ואם הגענו ל-5 – חוזרים ל-0
  const handleIncrement = () => {
    setCount(prev => (prev === 5 ? 0 : prev + 1));
  };

  // הקטנת הערך ב-1, לא יורדים מתחת ל-0 (לצורך הדוגמה)
  const handleDecrement = () => {
    setCount(prev => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>{count}</h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
