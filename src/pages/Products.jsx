import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Product from '../components/Product'
import { ProductsContext } from '../context/ProductsContext'
import ToggleNav from '../components/ToggleNav'
import { CartContext } from '../context/CartContext'
import SubscribeSection from '../components/SubscribeSection'
import Footer from '../components/Footer'
import InstagramHeading from '../components/InstagramHeading'

const Products = () => {

    let { products } = useContext(ProductsContext)
    let { cart, setCart } = useContext(CartContext)

    console.log(cart)
    return (
        <>
            <div>
                <Header />
                <div className='relative'>
                    <ToggleNav />
                </div>
                <div className='w-full flex justify-center ' >

                    <div className='w-full max-w-[1400px]  py-[30px] px-[20px] flex gap-10 flex-wrap justify-center'>
                        {products.length > 0 ? products?.map((item) =>
                            <Product product={item} key={item.id} />
                        )
                            :
                            [...Array(30)].map(() => (
                                <div className='flex flex-col items-center  gap-3 h-[400px] w-[310px] product-div '>
                                    <div className='h-[75%] w-full lg:relative flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-900 overflow-hidden'>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
                <SubscribeSection/>
                <InstagramHeading/>
                <Footer/>
            </div>
        </>
    )
}

export default Products