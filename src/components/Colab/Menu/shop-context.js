import React, {useState, createContext} from "react";
import { cases } from "../../data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i=1; i < cases.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const removeItem = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] = 0}));
    }

    const cartAmount = () => {
        let cartAmount = 0;
        for(const item in cartItems){
            cartAmount += cartItems[item];
        }
        return cartAmount;
    }
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = cases.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const contextValue = {cartItems, addToCart, removeFromCart, removeItem, cartAmount, getTotalCartAmount};
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}