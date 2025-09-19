import React, { memo } from 'react'
import Product from './Product'

const FpSection = memo(() => {
    return (
        <div>

            <div className='h-[70%] min-h-[110px] w-full flex flex-col justify-end items-center text-gray-50 p-[10px] box-border'>
                <div className='flex gap-2'>
                    <span>_________</span>
                    <span className='text-[1.2em] font-semibold text-gray-300'>All Styles in This Spring </span>
                    <span>_________</span>
                </div>
                <h2 className='text-[2em] lg:text-[2.5em] text-gray-50 font-bold uppercase text-center'>Feature Prodects</h2>
            </div>
            <div className='h-[500px] flex gap-10 flex-wrap justify-center  p-[25px] '>
                <Product/> 
                <Product/> 
                <Product/> 
                <Product/> 
            </div>
        </div>
    )
})

export default FpSection