import React from 'react'

const Section1 = () => {
    return (
        <div className='h-[800px]'>

            <div className='h-[85%] w-[100%] flex justify-start items-center bg-[url(/images/social.jpg)] bg-cover bg-no-repeat bg-center'>
                <div className='flex flex-col gap-5 md:gap-2 items-center md:items-end w-[100%] md:w-[40%] text-gray-50'>
                    <div className='flex gap-3 justify-center md:justify-end items-baseline relative'>
                        <span>____________________________ </span> <span className='text-[1.5em] md:text-[2em] px-[5px] font-semibold bg-[url(./src/assets/images/social.jpg)] bg-[1100px]  md:static absolute right-20 bg-transparent'>  BAG</span>
                    </div>
                    <h2 className='text-[3em] text-center md:text-right md:text-[5em] text-shadow-lg/30 text-shadow-black font-semibold'>WINTER 2025</h2>
                    <button className='h-[50px] w-[150px] rounded-[10px] text-[1em] font-bold bg-black cursor-pointer hover:bg-red-500 [transition:background-color_0.5s_ease-in-out]'>Shop Now</button>
                </div>
            </div>
            <div className= 'h-[15%] w-[100%] flex  justify-center' >
                <div className='flex grow-1 justify-center items-center border-gray-800 border-[1px]'>
                    <img
                        className='h-auto w-[160px] aspect-[2/1]'
                        src="/images/dijital-cube.jpg" alt="" />
                </div>
                <div className='flex grow-1 justify-center items-center border-gray-800 border-[1px]'>
                    <img
                        className='h-auto w-[160px] '
                        src="./src/assets/images/vende.jpg" alt="" />
                </div>
                <div className='flex grow-1 justify-center items-center border-gray-800 border-[1px]'>
                    <img
                        className='h-auto w-[160px] aspect-[2/1]'
                        src="/images/mangentle.jpg" alt="" />
                </div>
                <div className='hidden xsm:flex grow-1 justify-center items-center border-gray-800 border-[1px]'>
                    <img
                        className='h-auto w-[160px] aspect-[2/1]'
                        src="/images/img.jpg" alt="" />
                </div>
                <div className='hidden sm:flex grow-1 justify-center items-center border-gray-800 border-[1px]'>
                    <img
                        className='h-auto w-[160px] aspect-[2/1]'
                        src="/images/jewellery.jpg" alt="" />
                </div>
                <div className='hidden lg:flex grow-1 justify-center items-center border-gray-800 border-[1px] '>
                    <img
                        className='h-auto w-[160px] aspect-[2/1] '
                        src="/images/luxury.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Section1