import React from 'react'
import Header from '../components/Header'
import SecNav from '../components/SecNav'

const Page404 = () => {
  return (
    <>
        <SecNav/>
        <div className='h-[400px] flex justify-center items-center'>
            <h1 className='text-[5em] text-gray-50 text-center'>404 Page not found</h1>
        </div>
    </>
  )
}

export default Page404