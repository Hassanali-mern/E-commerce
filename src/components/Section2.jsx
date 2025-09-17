import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Section2 = () => {

    let [products, setProducts] = useState([])

    let fetchApi = async() => {
        let data = await fetch("https://fakestoreapi.com/products/").then(res => res.json())
        console.log(data)
        setProducts(data)
    }
    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div className='h-[1000px] md:h-[500px] lg:h-[700px] w-[100%] py-[30px] px-[10px] flex flex-col items-center md:flex-row justify-center gap-10 box-border'>
            <div className='h-[100%] max-w-[600px] w-[100%] md:w-[50%] flex flex-col gap-10 '>
                <div className='h-[50%] w-[100%] flex flex-col gap-3 justify-center items-start  bg-[url(./src/assets/images/jacket.png)] bg-no-repeat bg-right  bg-neutral-900 box-border p-[20px] '>
                    <h2 className='text-gray-50 text-[2em] lg:text-[2.5em] font-bold w-[260px]'>This Week Most Wanted</h2>
                    <p className='text-gray-50 text-[1.1em] font-semibold'>View Collection</p>
                </div>
                <div className='h-[50%] w-[100%] flex flex-col gap-3 justify-center items-start bg-[url(./src/assets/images/display.png)] bg-no-repeat bg-right   bg-neutral-900 box-border p-[20px]'>
                    <h1 className='text-gray-50 text-[2em] lg:text-[2.5em] font-bold w-[260px]'>Electronics</h1>
                    <p className='text-gray-50 text-[1.1em] font-semibold'>View Collection</p>
                </div>
            </div>
            <div className='h-[50%] md:h-[100%]  w-[100%] flex flex-col gap-3 justify-center items-start bg-[url(./src/assets/images/jacket.png)] bg-no-repeat bg-right  max-w-[600px] md:w-[50%] bg-neutral-900 box-border p-[20px] '>
                <h2 className='text-gray-50 text-[2em] lg:text-[2.5em] text-wrap whitespace-wrap font-bold w-[250px] md:w-[300px]  '>Women’s Holiday Clothes</h2>
                <p className='text-gray-50 text-[1.1em] font-semibold  '>View Collection</p>
            </div> 
        </div> 
    )
}

export default Section2