import React from 'react'

const SearchBox = () => {
    return (
        <div className='h-[80px] w-full lg:w-[300px] flex justify-center items-center border-[1px] border-neutral-700'>
            <div className='flex justify-between h-[60%] w-[90%] border-neutral-700 border-[1px]'>
                <input
                className='h-full  w-[90%] text-[1.1em] text-gray-50 p-[10px] outline-0'
                type="search" id="search-input" placeholder='Search Products ...' />
                <button className='f-full w-[15%] max-w-[60px] flex justify-center items-center bg-gray-100'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /> </svg>
                </button>
            </div>
        </div>
    )
}

export default SearchBox