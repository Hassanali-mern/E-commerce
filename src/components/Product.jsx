import React, { useRef, useState } from 'react'
import { Link } from 'react-router'

const Product = ({ product }) => {

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
      <div className='flex flex-col gap-3 h-[400px] w-[320px]  product-div'>
        <div className='h-[75%] relative flex flex-col items-center justify-center bg-neutral-900 overflow-hidden'>
          <Link  className='h-[80%] product-image '>
            <img
              className='h-full w-auto'
              src={'/images/bag.png'} alt="product-image" />
          </Link>
          {true ? <button onClick={() => { console.log('Hello') }} className='h-[45px] w-full add-btn  opacity-0 invisible bg-gray-50 absolute right-0 bottom-0 text-[1em] font-bold [transition:all_0.5s_ease-in-out] cursor-pointer'>ADD TO CART</button> : null}
        </div>
        <Link to={'/products'} className='txt-div'>
          <h2 className='text-gray-50 text-[1.8em] font-semibold text-center product-title' >{'Blue Bag'}</h2>
          <p className='text-gray-400 text-[1.2em] text-center product-price'>{'$29.00'}</p>
        </Link>
      </div>
    </>
  )
}

export default Product