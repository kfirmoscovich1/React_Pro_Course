import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function ShopList() {
  const { shopList, deleteProduct } = useContext(AppContext);

  return (
    <div className="my-4">
      <h4>Your Shopping List:</h4>
      <div className="row">
        {shopList.map(item => (
          <div key={item.id} className='col-lg-7 border p-1 my-1'>
            <button
              onClick={() => deleteProduct(item.id)}
              className="btn btn-sm btn-danger float-end"
            >
              X
            </button>
            <h5>{item.name} - {item.quantity}</h5>
          </div>
        ))}
        {shopList.length === 0 && <p>No products yet...</p>}
      </div>
    </div>
  );
}
