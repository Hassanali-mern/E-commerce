import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {

    let [products, setProducts] = useState([])

    useEffect(() => {

        (async () => {
            let data = await axios.get('https://fakestoreapi.com/products')
            setProducts(data.data)
        })()


    }, [])

    return (
        <ProductsContext value={{products}}>
            {children}
        </ProductsContext>
    )
}

export default ProductsContextProvider