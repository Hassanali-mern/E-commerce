import React, { memo, useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'
import { ProductsContext } from '../context/ProductsContext'

const Product = memo(({ product }) => {

  let { products, setProducts } = useContext(ProductsContext)
  let { cart, setCart } = useContext(CartContext)
  let { user } = useContext(AuthContext)
  let navigate = useNavigate()



  let addToCart = (pid) => {
    if (user) {
      if (cart.some(item => item.pid === pid)) {
        setCart([...cart.filter(item => item.pid !== pid), { pid: pid, qt: cart.find(item => item.pid === pid).qt + 1 }])
      } else {
        setCart([...cart, { pid: pid, qt: 1 }])
      }
    } else {
      navigate('/auth')
    }
  }



  return (
    <>
      {product ?
        <div className='flex flex-col items-center grow sm:grow-0  gap-3 md:h-[400px] h-[450px] w-[310px] product-div '>
          <div className='h-[60%] md:h-[75%] w-full lg:relative flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-900 overflow-hidden'>
            <Link to={`/products/${product?.id}`} className='h-[80%] product-image '>
              <img
                className='h-full w-auto '
                src={product?.image} alt="product-image" />
            </Link>
            <button onClick={() => { addToCart(product.id) }} className='h-[45px] text-neutral-50 dark:text-black hidden lg:block w-full add-btn  lg:opacity-0 lg:invisible bg-black dark:bg-gray-50 lg:absolute right-0 bottom-0 text-[1em] font-bold [transition:all_0.5s_ease-in-out] cursor-pointer'>ADD TO CART</button>
          </div>
          <Link to={`/products/${product?.id}`} className='txt-div w-full'>
            <h2 className='w-full text-black dark:text-gray-50 text-[1.4em] font-semibold text-center product-title overflow-hidden truncate ' >{product?.title}</h2>
            <p className='text-neutral-700  dark:text-gray-300 text-[1.3em] text-center product-price'>{`$${product?.price}`}</p>
          </Link>
          <button onClick={() => { addToCart(product.id) }} className='h-[45px] w-[150px] text-neutral-50 dark:text-black p-[2px] add-btn lg:hidden bg-black dark:bg-gray-50  text-[1em] font-bold  cursor-pointer rounded-[5px] '>ADD TO CART</button>
        </div>
        :
        <div className='flex flex-col items-center  gap-3 h-[400px] w-[310px] product-div '>
          <div className='h-[75%] w-full lg:relative flex flex-col items-center justify-center bg-neutral-900 overflow-hidden'>
          </div>

        </div>

      }
    </>
  )
})

export default Product