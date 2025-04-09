import React, { useRef, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function ShopForm() {
  const { addProduct, resetProducts } = useContext(AppContext);
  const nameRef = useRef();
  const quantityRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name: nameRef.current.value,
      quantity: quantityRef.current.value
    };
    addProduct(newProduct);
    nameRef.current.value = "";
    quantityRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmit} className="col-lg-5">
        <h2>Shopping List</h2>
      <label>Product Name:</label>
      <input ref={nameRef} type="text" className="form-control" required />
      <label>Quantity:</label>
      <input ref={quantityRef} type="number" min="1" defaultValue="1" className="form-control" required />
      <button className="btn btn-success mt-3">Add</button>
      <button type="button" onClick={resetProducts} className="btn btn-danger mt-3 ms-2">Reset</button>
    </form>
  );
}
