import React, { memo, useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'

const Product = memo(({ product }) => {

  let { cart, setCart } = useContext(CartContext)
  let { user } = useContext(AuthContext)
  let navigate = useNavigate()



  let addToCart = () => {
    if (user) {
      setCart([...cart, 'abc'])
    } else {
      navigate('/auth')
    }
  }


  return (
    <>
      {product ?
        <div className='flex flex-col items-center  gap-3 h-[400px] w-[310px] product-div '>
          <div className='h-[75%] w-full lg:relative flex flex-col items-center justify-center bg-neutral-900 overflow-hidden'>
            <Link to={`/products/${product?.id}`} className='h-[80%] product-image '>
              <img
                className='h-full w-auto '
                src={product?.image} alt="product-image" />
            </Link>
            {true ? <button onClick={() => { setCart([...cart, 'abc']) }} className='h-[45px] hidden lg:block w-full add-btn  lg:opacity-0 lg:invisible bg-gray-50 lg:absolute right-0 bottom-0 text-[1em] font-bold [transition:all_0.5s_ease-in-out] cursor-pointer'>ADD TO CART</button> : null}
          </div>
          <Link to={`/products/${product?.id}`} className='txt-div w-full'>
            <h2 className='w-full text-gray-50 text-[1.4em] font-semibold text-center product-title overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] ' >{product?.title}</h2>
            <p className='text-gray-300 text-[1.2em] text-center product-price'>{`$${product?.price}`}</p>
          </Link>
          <button onClick={() => { addToCart() }} className='h-[40px] w-[120px] p-[2px] add-btn lg:hidden  bg-gray-50  text-[1em] font-bold  cursor-pointer rounded-[5px] '>ADD TO CART</button>
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