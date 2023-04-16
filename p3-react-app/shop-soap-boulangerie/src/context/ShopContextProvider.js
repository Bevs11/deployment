import React, {createContext, useState} from 'react'
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
  const [CartItems, setCartItems] = useState(getDefaultCart());
  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1} ))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1} ))
  }

const contextValue = {CartItems, addToCart, removeFromCart};

console.log(CartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}

    </ShopContext.Provider>
  )
}

export default ShopContextProvider