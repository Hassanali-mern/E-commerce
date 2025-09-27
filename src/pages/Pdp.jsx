import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate, useParams } from 'react-router'
import axios from 'axios'
import { ProductsContext } from '../context/ProductsContext'
import ToggleNav from '../components/ToggleNav'
import TopHeading from '../components/TopHeading'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'
import Product from '../components/Product'

const Pdp = () => {

  let { user, setUser } = useContext(AuthContext)
  let { cart, setCart } = useContext(CartContext)
  let navigate = useNavigate()

  let { id } = useParams()
  let { products } = useContext(ProductsContext)
  console.log(products)
  let product = products[+id - 1]


  let addToCart = (product) => {
    if (user) {
      setCart([...cart, product])
      console.log(cart)
    } else {
      navigate('/auth')
    }
  }

  return (
    <div >
      <Header />
      <div className='relative'>
        <ToggleNav />
      </div>
      <div className='w-full  flex flex-col items-center  text-gray-50'>
        <div className='w-full  max-w-[1400px]'>

          <div className='h-auto lg:h-[550px] w-full lg:flex lg:flex-row flex-col  py-[15px] lg:p-[30px] box-border overflow-hidden'>
            <div className='h-[300px] lg:h-auto w-full lg:w-[40%] flex justify-center items-center  bg-neutral-900 overflow-hidden'>
              <img className='h-[80%]' src={product?.image} />
            </div>
            <div className='w-full lg:w-[60%] flex flex-col gap-7 px-[12px] py-[7px]  lg:px-[30px]' >
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-[1.7em] md:text-[2em] font-semibold'>{product?.title}</h2>
                  <p className='text-neutral-400 text-[1.1em] font-semibold'>{`$${product?.price}`}</p>
                </div>
                <div className='flex gap-5'>
                  <input defaultValue={1} className='w-[70px] p-[10px] outline-0 border-[1px] text-[1.1em]  border-neutral-600' type="number" />
                  <button onClick={() => { addToCart(product) }} className='h-[50px] w-[160px] font-bold rounded-[5px] bg-neutral-200 text-black text-[1.1em] cursor-pointer' >Add To Cart</button>
                </div>
              </div>
              <p className='text-[1em] font-semibold'>Catagories <Link to={'/'} className='text-red-500 '> Clothing Feature Products</Link></p>
              <p className='text-[1.1em] md:text-[1.3em] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:7] [-webkit-box-orient:vertical] '>{product?.description}</p>
            </div>
          </div>
          <div className='h-auto w-full p-[30px] box flex flex-col gap-10'>
            <h2 className='text-[2em] font-bold'>Related Products</h2>
            <div className='flex flex-wrap justify-center gap-5 w-full'>
              {products.filter((item) => item.category === product.category).map((product) =>
                <Product product={product}/>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pdp