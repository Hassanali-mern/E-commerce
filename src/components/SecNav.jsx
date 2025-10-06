import React from 'react'
import { Link } from 'react-router'

const SecNav = () => {
  return (
    <div className='lg:h-[25%] max-h-[200px] w-[100%] hidden lg:flex justify-center items-center border-t-[2px] border-gray-500/40  box-border'>
        <ul className='flex gap-12 items-center list-none'>
            <li className='nav-option'>
                <Link to={'/'}>Home</Link>
            </li>
            <li className='nav-option'>
                <Link to={'/products'}>All Products</Link>
            </li>
            <li className='nav-option'>
                <Link to={'/'}>Men's Clothing</Link>
            </li>
            <li className='nav-option'>
                <Link to={'/'}>Electronics</Link>
            </li>
            <li className='nav-option'>
                <Link to={'/'}>Women's Clothing</Link>
            </li>
        </ul>
    </div>
  )
}

export default SecNav