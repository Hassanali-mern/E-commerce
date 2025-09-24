import React, { memo, useContext, useState } from 'react'
import Product from './Product'
import { ProductsContext } from '../context/ProductsContext'

const FpSection = memo(() => {

    let { products } = useContext(ProductsContext)
    let [menCatagory, setMenCatagory] = useState(products?.filter(item => item.category === "men's clothing"))
    let [jeweleyCatagory, setJeweleyCatagory] = useState(products?.filter(item => item.category === "jewelery"))
    let [womenCatagory, setWomenCatagory] = useState(products?.filter(item => item.category === "women's clothing"))
    let [electronicCatagory, setElectronicCatagory] = useState(products?.filter(item => item.category === "electronics"))
    let [fProducts, setFProducts] = useState([menCatagory[1], jeweleyCatagory[2], electronicCatagory[3], womenCatagory[3]])
    

    return (
        <div className='flex flex-col items-center'>

            <div className='h-[70%] min-h-[110px] w-full flex flex-col justify-end items-center text-gray-50 p-[10px] box-border'>
                <div className='flex gap-2'>
                    <span>_________</span>
                    <span className='text-[1.2em] font-semibold text-gray-300 text-center'>All Styles in This Spring </span>
                    <span>_________</span>
                </div>
                <h2 className='text-[2em] lg:text-[2.5em] text-gray-50 font-bold uppercase text-center'>Feature Prodects</h2>
            </div>
            <div className='h-[500px] w-full max-w-[1550px] flex gap-10 flex-wrap justify-center  p-[25px] '>
                {!fProducts.length<1 ? fProducts?.map((product, i) => (
                    <Product product={product} key={i} />
                )):
                <p>no products</p>
                }
            </div>
        </div>
    )
})

export default FpSection