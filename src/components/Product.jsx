import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router'
import { CartContext } from '../context/CartContext'

const Product = ({ product }) => {

  const { cart, setCart } = useContext(CartContext)


  // let box = useRef(null)
  // let addBtn = useRef(null)
  // let [isshowBtn, SetisShowBtn] = useState(false)

  // let showBtn = (e) => {
  //   SetisShowBtn(true)
  // }

  // let hideBtn = (e) => {
  //   SetisShowBtn(false)
  // }

  return (
    <>
      {product ?
        <div className='flex flex-col gap-3 h-[400px] w-[320px] product-div'>
          <div className='h-[75%] relative flex flex-col items-center justify-center bg-neutral-900 overflow-hidden'>
            <Link to={`/products/${product?.id}`} className='h-[80%] product-image '>
              <img
                className='h-full w-auto '
                src={product?.image} alt="product-image" />
            </Link>
            {true ? <button onClick={() => { setCart([...cart, 'abc']) }} className='h-[45px] w-full add-btn  opacity-0 invisible bg-gray-50 absolute right-0 bottom-0 text-[1em] font-bold [transition:all_0.5s_ease-in-out] cursor-pointer'>ADD TO CART</button> : null}
          </div>
          <Link to={`/products/${product?.id}`} className='txt-div'>
            <h2 className='text-gray-50 text-[1.4em] font-semibold text-center product-title' >{product?.title}</h2>
            <p className='text-gray-300 text-[1.2em] text-center product-price'>{`$${product?.price}`}</p>
          </Link>
        </div>
        :
        <h2 className='text-gray-50'>No Product</h2>
      }
    </>
  )
}

export default Product