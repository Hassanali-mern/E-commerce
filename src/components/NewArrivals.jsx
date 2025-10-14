import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { CartContext } from '../context/CartContext'
import Product from './Product'

const NewArrivals = () => {
    let { products } = useContext(ProductsContext)
    let { cart, setCart } = useContext(CartContext)
    let newArrivals = products.filter(item => item.category === "women's clothing")
    console.log(newArrivals)
    return (
        <div className='w-full flex justify-center px-[20px] py-[30px]'>
            <div className='w-full max-w-[1400px] flex flex-col gap-10'>
                <div className='h-[110px] w-full flex flex-col justify-end items-center text-black dark:text-gray-50  p-[10px] box-border'>
                    <div className='flex gap-4'>
                        <span>_________</span>
                        <span className='text-[1.2em] font-semibold text-neutral-700 dark:text-gray-300 text-center'>All Styles in This Spring </span>
                        <span>_________</span>
                    </div>
                    <h2 className='text-[2em] lg:text-[2.5em] text-black dark:text-gray-50 font-bold uppercase text-center'>New Arrivals</h2>
                </div>
                <div className='flex flex-wrap justify-center gap-10'>
                    {newArrivals.map((product) => (
                        <Product product={product} />
                    ))

                    }
                </div>
            </div>

        </div>
    )
}

export default NewArrivals