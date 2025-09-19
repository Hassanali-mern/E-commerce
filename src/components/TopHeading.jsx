import React from 'react'
import { Link } from 'react-router'

const TopHeading = ({ heading }) => {
  return (
    <div className='h-[250px] bg-neutral-900 flex flex-col gap-2 justify-center items-center'>
      <h1 className='text-gray-50 text-[2.5em] font-bold'>{heading}</h1>
      <p>
        <span className='text-neutral-50 text-[0.9em]' ><Link to={'/'}>Home&gt;</Link></span>
        <span className='text-neutral-500 text-[0.9em]'>{heading}</span>
      </p>
    </div>
  )
}

export default TopHeading