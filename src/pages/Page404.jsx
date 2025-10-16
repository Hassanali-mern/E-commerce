import React from 'react'
import Header from '../components/layout/Header'
import SecNav from '../components/layout/SecNav'
import ToggleNav from '../components/layout/ToggleNav'

const Page404 = () => {
  return (
    <>
      <SecNav />
      <div className='relative'>
        <ToggleNav />
      </div>
      <div className='h-[400px] flex justify-center items-center'>
        <h1 className='text-[5em] text-gray-50 text-center'>404 Page not found</h1>
      </div>
    </>
  )
}

export default Page404