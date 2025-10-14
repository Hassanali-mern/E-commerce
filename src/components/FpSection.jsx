import React, { memo, useContext, useState, } from 'react'
import Product from './Product'
import { ProductsContext } from '../context/ProductsContext'

const FpSection = memo(() => {

    let { products } = useContext(ProductsContext)

    let electronicsArr = products.filter(p => p.category === "electronics");
    let jewelryArr = products.filter(p => p.category === "jewelery");
    let mensArr = products.filter(p => p.category === "men's clothing");
    let womensArr = products.filter(p => p.category === "women's clothing");

    let featured = [
        mensArr[1],
        jewelryArr[2],
        electronicsArr[3],
        womensArr[3]
    ].filter(Boolean);

    console.log(products)

    return (
        <div className='flex flex-col items-center'>

            <div className='h-[110px] w-full flex flex-col justify-end items-center text-black dark:text-gray-50  p-[10px] box-border'>
                <div className='flex gap-2'>
                    <span>_________</span>
                    <span className='text-[1.2em] font-semibold text-neutral-700 dark:text-gray-300 text-center'>All Styles in This Spring </span>
                    <span>_________</span>
                </div>
                <h2 className='text-[2em] lg:text-[2.5em] text-black dark:text-gray-50 font-bold uppercase text-center'>Feature Prodects</h2>
            </div>
            <div className='h-auto w-full max-w-[1550px] flex gap-10 flex-wrap justify-center  p-[25px] box-border'>
                {featured?.length > 0 ? featured?.map((product, i) => (
                    <Product product={product} key={i} />
                )) :
                    [1, 2, 3, 4].map((product) => (
                        <div className='flex flex-col items-center  gap-3 h-[400px] w-[310px] product-div '>
                            <div className='h-[75%] w-full lg:relative flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-900 overflow-hidden'>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
})

export default FpSection