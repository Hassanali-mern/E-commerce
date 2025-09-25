import React from 'react'

const Section1 = () => {
    return (
        <div className='h-[800px]'>

            <div className='h-[85%] w-[100%] flex justify-center items-center bg-[url(/images/social.jpg)] bg-cover bg-no-repeat bg-center'>
                <div className='flex justify-start items-center w-[100%] md:w-[50%]'>

                    <div className='flex flex-col gap-5 md:gap-2 items-center md:items-end w-[100%] md:w-[40%] text-gray-50'>
                        <div className='hidden md:flex gap-3 justify-center md:justify-start items-baseline relative'>
                            <span>____________________________ </span> <span className=' text-[2em] px-[10px] font-semibold  rounded-[10px] '>  BAG</span>
                        </div>
                        <div className=' md:hidden flex items-center justify-center w-full text-[1.8em] font-semibold'>
                            <p className='flex items-center gap-2'><span>_______</span> <span> BAG </span> <span>_______</span></p>
                        </div>
                        <h2 className='text-[2.5em] text-center md:text-right md:text-[3.5em] lg:text-[5em] text-shadow-lg/30 text-shadow-black font-semibold 2xl:font-bold'>WINTER 2025</h2>
                        <button className='h-[50px] w-[150px] rounded-[10px] text-[1em] font-bold bg-black cursor-pointer hover:bg-red-500 [transition:background-color_0.5s_ease-in-out]'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='h-[15%] w-[100%] flex  justify-center' >
                <div className='flex grow-1 justify-center items-center border-gray-800 border-[1px]'>
                    <img
                        className='h-auto w-[160px] aspect-[2/1]'
                        src="/images/dijital-cube.jpg" alt="" />
                </div>
                <div className='flex grow-1 justify-center items-center border-gray-800 border-[1px]'>
                    <img
                        className='h-auto w-[160px] '
                        src="/images/vende.jpg" alt="" />
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