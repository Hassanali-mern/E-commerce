import React from 'react'

const Fcsection = () => {
    return (
        <>
            <div className='flex flex-col'>
                <div className='h-[110px] w-full flex flex-col justify-end items-center text-black dark:text-gray-50  p-[10px] box-border'>
                    <div className='flex gap-2'>
                        <span>_________</span>
                        <span className='text-[1.2em] font-semibold text-neutral-700 dark:text-gray-300 text-center'>Made The Good Way </span>
                        <span>_________</span>
                    </div>
                    <h2 className='text-[2em] lg:text-[2.5em] text-black dark:text-gray-50 font-bold uppercase text-center'>Feature Categories</h2>
                </div>
                <div className='w-full py-[20px] px-[30px] flex justify-center gap-10 flex-wrap'>
                    <div className='h-[350px] lg:h-[450px] w-[320px] lg:w-[420px] flex justify-center bg-[url(/images/hats.webp)] dark:bg-[url(/images/hats-dark.webp)] bg-cover relative cursor-pointer'>
                        <button className='h-[50px] w-[130px]  text-[1.3em] absolute bottom-10  text-black dark:text-gray-50 bg font-bold cursor-pointer hover:text-neutral-50 hover:bg-red-500  [transition:all_0.5s_ease-in-out]'>Hats</button>
                    </div>
                    <div className='h-[350px] lg:h-[450px] w-[320px] lg:w-[420px] flex justify-center bg-[url(/images/bags.webp)] dark:bg-[url(/images/bags-dark.webp)] bg-cover  relative cursor-pointer'>
                        <button className='h-[50px] w-[130px]  text-[1.3em] absolute bottom-10  text-black dark:text-gray-50 bg font-bold cursor-pointer  hover:text-neutral-50 hover:bg-red-500 [transition:all_0.5s_ease-in-out]'>Bags</button>
                    </div>
                    <div className='h-[350px] lg:h-[450px] w-[320px] lg:w-[420px] flex justify-center bg-[url(/images/tops.webp)] dark:bg-[url(/images/tops-dark.webp)] bg-cover relative cursor-pointer'>
                        <button className='h-[50px] w-[130px]  text-[1.3em] absolute bottom-10  text-black dark:text-gray-50 bg font-bold cursor-pointer hover:text-neutral-50 hover:bg-red-500  [transition:all_0.5s_ease-in-out]'>Tops</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fcsection 