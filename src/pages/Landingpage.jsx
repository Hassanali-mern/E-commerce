import React from 'react'
import Header from '../components/Header'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import FpSection from '../components/FpSection'
import ToggleNav from '../components/ToggleNav'
import Fcsection from '../components/Fcsection'
import SpecialSection from '../components/SpecialSection'
import NewArrivals from '../components/NewArrivals'
import SubscribeSection from '../components/SubscribeSection'
import BlogSection from '../components/BlogSection'


const Landingpage = () => {



  return (
    <div >
      <Header />
      <div className='relative'>
        <ToggleNav />
      </div>
      <Section1 />
      <Section2 />
      <FpSection />
      <Fcsection />
      <SpecialSection />
      <NewArrivals />
      <SubscribeSection />
      <BlogSection />
      <div className=' h-[500px] w-full flex justify-center'>
        <div className='h-full w-full max-w-[1400px] flex flex-wrap justify-center items-center gap-10 px-[20px] py-[30px]'>
          <div className='h-[220px] w-[300px] lg:w-[400px] flex flex-col gap-2 justify-center items-center border-gray-300 border-[1px]'>
            <img src="/images/free-shipping.png" alt="free shiping" />
            <h3 className='text-[1.6em] font-bold uppercase'>Free Shipping</h3>
            <p className='text-[1.1em] text-gray-500'>on all orders over $49.00</p>
          </div>
          <div className='h-[220px] w-[300px] lg:w-[400px] flex flex-col gap-2 justify-center items-center border-gray-300 border-[1px]'>
            <img src="/images/return.png" alt="15 days returns" />
            <h3 className='text-[1.6em] font-bold uppercase'>15 Days Returns</h3>
            <p className='text-[1.1em] text-gray-500'>moneyback guarantee</p>
          </div>
          <div className='h-[220px] w-[300px] lg:w-[400px] flex flex-col gap-2 justify-center items-center border-gray-300 border-[1px]'>
            <img src="/images/secure.png" alt="secure checkout" />
            <h3 className='text-[1.6em] font-bold uppercase'>Secure Checkout</h3>
            <p className='text-[1.1em] text-gray-500'>100% protected by Paypal</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Landingpage