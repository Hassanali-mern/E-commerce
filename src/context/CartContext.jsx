import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    

    return (
        <CartContext value={{cart , setCart} }>
            {children}
        </CartContext>
    )
}

export default CartContextProvider