import React, {createContext, useState, useEffect} from 'react'
import { popularProducts } from '../data';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
  for (let i=1; i<popularProducts.length + 1; i++ ) {
    cart[i] =0;
  }
  return cart;
}


const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [viewingId, setViewingId] = useState(1);
  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1} ));
   
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1} ))
  }

  const settingId = (id) => {
      setViewingId(id);
      console.log(viewingId);

  }

const contextValue = {cartItems, addToCart, removeFromCart, settingId, viewingId};



  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}

    </ShopContext.Provider>
  )
}

export default ShopContextProvider