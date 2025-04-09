import { createContext, useState, useEffect } from 'react';
export const AppContext = createContext({
    shopList: [],
    addProduct: (_newItem) => {},
    resetProducts: () => {},
    deleteProduct: (_id) => {}
  });
  
  export default function AppContextProvider({ children }) {
    const [shopList, setShopList] = useState(() => {
        return JSON.parse(localStorage.getItem("shopList")) || [];
      });
    
      useEffect(() => {
        localStorage.setItem("shopList", JSON.stringify(shopList));
      }, [shopList]);
  
    const addProduct = (_newItem) => {
      setShopList([...shopList, _newItem]);
    };
  
    const resetProducts = () => {
        setShopList([]);
    };
  
    const deleteProduct = (_id) => {
        const filter_ar = shopList.filter(item => item.id !== _id);
        setShopList(filter_ar);
    };
  
    const val = {
      shopList,
      addProduct,
      resetProducts,
      deleteProduct
    };
  
    return <AppContext.Provider value={val}>{children}</AppContext.Provider>;
  }
  