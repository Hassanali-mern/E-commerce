import React from 'react'

const Footer = () => {
    return (
        <div className='h-auto md:h-[500px] w-full text-neutral-500 bg-neutral-900 p-[10px] flex flex-col gap-10'>
            <div className='h-[80%] w-full flex justify-center items-center '>
                <div className='h-[70%] w-[85%] flex flex-col md:flex-row gap-10 border-b-[1px]  border-neutral-700 p-[10px]'>

                    <div className='h-full w-full md:w-[50%] flex flex-col md:flex-row box-border gap-10'>
                        <div className='w-full md:w-[50%] flex flex-col gap-2'>
                            <h3 className='uppercase text-gray-200 font-bold mb-[10px]'>About</h3>
                            <span>FAQ</span>
                            <span>Contact</span>
                        </div>
                        <div className='w-full md:w-[50%] flex flex-col gap-2'>
                            <h3 className='uppercase  text-gray-200 font-bold mb-[10px]'>Useful links</h3>
                            <span>FAQ</span>
                            <span>Contact</span>
                        </div>
                    </div>
                    <div className='h-full w-full md:w-[50%] flex flex-col md:flex-row gap-10'>
                        <div className='w-full md:w-[50%] flex flex-col gap-2'>
                            <h3 className='uppercase  text-gray-200 font-bold mb-[10px]'>costomer service</h3>
                            <span>Payment Methods</span>
                            <span>Money-back Guarantee</span>
                            <span>Returns</span>
                            <span>Terms & Conditions</span>
                            <span>FAQ</span>
                        </div>
                        <div className='w-full md:w-[50%] flex flex-col gap-2'>
                            <h3 className='uppercase  text-gray-200 font-bold mb-[10px]'>my acount</h3>
                            <span>Sign in</span>
                            <span>View Cart</span>
                            <span>Orders</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[15%] w-full flex flex-col justify-center items-center gap-4  box-border'>
                <img src="/images/footer-image.png" alt="" />
                <p className='text-center'>Copyright © {new Date().getFullYear()} <span className='text-gray-200 font-semibold'>Aurelia Mart</span>. All Rights Reserved. | Aurelia Mart by  <span className='text-gray-200 font-semibold'>Hassan Ali</span></p>
            </div>

        </div>
    )
}

export default Footer