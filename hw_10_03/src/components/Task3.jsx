import React, { useEffect, useState } from 'react';

export default function Task3() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = 'https://monkeys.co.il/api2/bitcoin.php';
    try {
      setIsLoading(true);
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setList(data);
    } catch (err) {
      console.log(err);
      alert('There was a problem, please try again later');
    }
    setIsLoading(false);
  };

  const formatPrice = (price) => {
    return Number(price).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className='container'>
      <h4>List of Cryptocurrencies:</h4>
      {isLoading && <h5>Loading...</h5>}
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name} ..........{formatPrice(item.price_usd)} $
          </li>
        ))}
      </ul>
    </div>
  );
}
