import React, { useContext } from 'react'
import Header from '../components/Header'
import ToggleNav from '../components/ToggleNav'
import { NavContext } from '../context/NavContext'

const Cart = () => {

  let {cart,setCart} = useContext(NavContext)

  return (
    <div>
      <Header />
      <div className='relative'>
        <ToggleNav />
        <div>
          <h1 className='text-[2.5em]'></h1>
        </div>
      </div>
    </div>
  )
}

export default Cart