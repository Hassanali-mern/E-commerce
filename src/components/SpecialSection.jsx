import React from 'react'

const SpecialSection = () => {
    return (
        <div className='h-[1000px] md:h-[700px] w-full flex justify-center py-[25px] px-[30px]'>
            <div className='h-full w-full max-w-[1400px] flex  flex-col md:flex-row'>
                <div className='h-full w-full md:w-[50%]  flex flex-col gap-5 justify-center items-center'>
                    <div className='h-[110px] w-full flex flex-col gap-3 justify-end items-center text-black dark:text-gray-50  p-[10px] box-border'>
                        <div className='flex gap-2'>
                            <span>_________</span>
                            <span className='text-[1em] font-semibold text-neutral-700 dark:text-gray-300 text-center'>Special </span>
                            <span>_________</span>
                        </div>
                        <h2 className='text-[2em] lg:text-[2em] text-black dark:text-gray-50 font-bold uppercase text-center '>REFINE YOUR STYLE</h2>
                    </div>
                    <div className='flex flex-col items-center grow sm:grow-0  gap-3 md:h-[400px] h-[450px] w-[310px] product-div '>
                        <div className='h-[60%] md:h-[75%] w-full lg:relative flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-900 overflow-hidden'>
                            <div className='h-[80%] product-image '>
                                <img
                                    className='h-full w-auto '
                                    src={'/images/glasses.webp'} alt="product-image" />
                            </div>
                        </div>
                        <div className='txt-div w-full flex flex-col gap-1 items-center'>
                        <span className='text-neutral-600'>Accessories</span>
                            <h2 className='w-full text-black dark:text-gray-50 text-[1.5em] text-center product-title overflow-hidden truncate font-bold' >Makeup Collection</h2>
                            <p className='text-neutral-700  dark:text-gray-300 text-[1.3em] text-center product-price'>$99.99</p>
                        </div>
                    </div>
                </div>
                <div className='h-full w-full md:w-[50%]  flex items-end bg-[url(/images/makeup-light.webp)] dark:bg-[url(/images/makeup-dark.webp)] bg-cover'>
                    <div className='flex flex-col font-bold'>
                        <div className='flex flex-col gap-15 p-[30px]'>
                            <div className='flex flex-col gap-3'>
                                <span className='text-neutral-200'>Clothing</span>
                                <h2 className='w-full max-w-[400px] text-[2em] font-bold text-white'>Casual Basics & Trendy Makeup Kit</h2>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <span className='text-neutral-200'>IN THE LOOK</span>
                                <span className='text-neutral-200 text-[1.3em]'>$49.99</span>
                            </div>
                            <div className='flex flex-col gap-2 text-neutral-100 text-[1.4em]'>
                                <p>Skin & Eye Primer</p>
                                <p>A Foundation & Concealer Palette</p>
                            </div>
                            <button className='h-[55px] w-[140px] rounded-[5px] bg-transparent text-white text-[1.1em] flex justify-center items-center border-[1px] border-white  hover:bg-white hover:text-red-500 cursor-pointer  [transition:all_0.5s_ease-in-out]'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialSection