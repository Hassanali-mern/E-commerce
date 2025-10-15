import React from 'react'

const BlogSection = () => {
    return (
        <div className='h-auto w-full flex justify-center'>
            <div className='h-full w-full max-w-[1400px] py-[30px] px-[20px] flex flex-wrap justify-center gap-10'>
                <div className='h-[110px] w-full flex flex-col justify-end items-center text-black dark:text-gray-50  p-[10px] box-border'>
                    <div className='flex gap-4'>
                        <span>_________</span>
                        <span className='text-[1.2em] font-semibold text-neutral-700 dark:text-gray-300 text-center'>Latest Updates </span>
                        <span>_________</span>
                    </div>
                    <h2 className='text-[2em] lg:text-[2.5em] text-black dark:text-gray-50 font-bold uppercase text-center'>From our blog</h2>
                </div>
                <div className='h-auto w-[420px] flex flex-col items-center gap-5'>
                    <img src="/images/blog1.webp" alt="" />
                    <div>
                        <span className='text-red-500'>Blog -</span>
                        <span className='text-gray-500'> July 2,2018 -</span>
                        <span className='text-gray-500'> by Sakin</span>
                    </div>
                    <h2 className='text-[1.8em] text-center font-bold'>Sum Up Your Fashion Experience</h2>
                    <p className='text-[1.3em] text-gray-500 text-center'>The only sign of commercial activity within the harbour, visible from the beach of the Great Isabel, is the square blunt end</p>
                    <button className='outline-0 text-[1.1em] font-semibold'>Continue Reading</button>

                </div>
                <div className='h-auto w-[420px] flex flex-col items-center gap-5'>
                    <img src="/images/blog2.webp" alt="" />
                    <div>
                        <span className='text-red-500'>Design, Style -</span>
                        <span className='text-gray-500'> July 2,2018 -</span>
                        <span className='text-gray-500'> by Sakin</span>
                    </div>
                    <h2 className='text-[1.8em] text-center font-bold'>This Is Why Fashion Is So Famous!</h2>
                    <p className='text-[1.3em] text-gray-500 text-center'>Human faces are very powerful. User Experience designer Aarron Walter describes in his book Designing for Emotion why we appreciate human faces</p>
                    <button className='outline-0 text-[1.1em] font-semibold'>Continue Reading</button>

                </div>
                <div className='h-auto w-[420px] flex flex-col items-center gap-5'>
                    <img src="/images/blog3.webp" alt="" />
                    <div>
                        <span className='text-red-500'>Blog -</span>
                        <span className='text-gray-500'> July 2,2018 -</span>
                        <span className='text-gray-500'> by Sakin</span>
                    </div>
                    <h2 className='text-[1.8em] text-center font-bold'>5 Stereotypes About Fashion</h2>
                    <p className='text-[1.3em] text-gray-500 text-center'>Human faces are very powerful. User Experience designer Aarron Walter describes in his book Designing for Emotion why we appreciate human faces</p>
                    <button className='outline-0 text-[1.1em] font-semibold'>Continue Reading</button>

                </div>
            </div>

        </div>
    )
}

export default BlogSection