import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Product from '../components/Product'
import { ProductsContext } from '../context/ProductsContext'
import ToggleNav from '../components/ToggleNav'

const Products = () => {

    let { products } = useContext(ProductsContext)
    console.log(products)



    return (
        <>
            <div>
                <Header />
                <div className='relative'>
                    <ToggleNav />
                </div>
                <div className='w-full flex justify-center ' >

                    <div className='w-full max-w-[1400px]  p-[20px] flex gap-10 flex-wrap justify-center'>
                        {products?.map((item) =>
                            <Product product={item} key={item.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products