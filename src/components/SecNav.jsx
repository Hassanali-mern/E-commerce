import React from 'react'
import { Link } from 'react-router'

const SecNav = () => {
  return (
    <div className='lg:h-[25%] w-[100%] hidden lg:flex justify-center items-center  box-border'>
        <ul className='flex gap-12 list-none'>
            <li className='nav-option'>
                <Link to={'/'}>Home</Link>
            </li>
            <li className='nav-option'>
                <Link to={'/'}>Womens Clothing</Link>
            </li>
            <li className='nav-option'>
                <Link to={'/'}>Men's Clothing</Link>
            </li>
            <li className='nav-option'>
                <Link to={'/'}>Electronics</Link>
            </li>
            <li className='nav-option'>
                <Link to={'/'}>Home Applinces</Link>
            </li>
        </ul>
    </div>
  )
}

export default SecNav