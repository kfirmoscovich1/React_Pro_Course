import React from 'react';
import ShopForm from '../components/ShopForm';
import ShopList from '../components/ShopList';

export default function ShopApp() {
  return (
    <div className="container">
      <ShopForm />
      <ShopList />
    </div>
  );
}
