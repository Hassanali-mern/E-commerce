import React from 'react'

const SubscribeSection = () => {
  return (
    <div className='h-[700px] w-full flex justify-center'>
      <div className='h-full w-full max-w-[1400px] flex px-[20px] py-[30px]'>
        <div className='h-full w-[50%] bg-[url(/images/subscribe-light.webp)] dark:bg-[url(/images/subscribe-dark.webp)] bg-cover'>

        </div>
        <div className='h-full w-[50%] bg-slate-100 dark:bg-[#021e1e] flex flex-col justify-center items-center gap-5'>
          <div className='h-[110px] w-full flex flex-col justify-end items-center text-black dark:text-gray-50  p-[10px] box-border'>
            <div className='flex gap-4'>
              <span>_________</span>
              <span className='text-[1.5em] font-semibold text-neutral-700 dark:text-gray-300 text-center'>Newsletter </span>
              <span>_________</span>
            </div>
            <h2 className='text-[2em] lg:text-[3.5em] text-black dark:text-gray-50 font-bold uppercase text-center'>Subscribe</h2>
          </div>
          <div className='flex flex-col gap-10 items-center'>
            <p className='text-[1.5em] text-gray-600'>Sign up now for 10% discount on first order.</p>
            <input className='h-[50px] w-[300px] outline-0 bg-white text-black dark:bg-black dark:text-gray-50 px-[20px] text-[1.2em]' type="text" placeholder='Enter Your Email Address' />
            <button className='h-[50px] w-[150px] rounded-[10px] text-[1em] text-gray-50 bg-black dark:bg-gray-200 dark:text-black font-bold cursor-pointer hover:bg-red-500 hover:text-neutral-50 [transition:all_0.5s_ease-in-out]'>Shop Now</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default SubscribeSection