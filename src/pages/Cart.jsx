import React, { useContext } from 'react'
import Header from '../components/layout/Header'
import ToggleNav from '../components/layout/ToggleNav'
import Footer from '../components/layout/Footer'
import InstagramHeading from '../components/common/InstagramHeading'
import SubscribeSection from '../components/specific/SubscribeSection'
import { CartContext } from '../context/CartContext'
import { ProductsContext } from '../context/ProductsContext'
import { Link } from 'react-router'

const Cart = () => {

  let { products, setProducts } = useContext(ProductsContext)
  let { cart, setCart } = useContext(CartContext)
  console.log(cart)

  return (
    <div>
      <Header />
      <div className='relative'>
        <ToggleNav />
      </div>
      <div className='w-full flex flex-col items-center '>
        <div className='w-full max-w-[1400px] p-[15px] flex flex-col items-center'>
          <table className=' h-auto w-full max-w-[900px] flex flex-col gap-10 md:gap-0'>
            <tr className='w-full hidden  md:flex bg-[#eef2f8] dark:bg-[#061817]  text-black dark:text-neutral-50 text-[1.2em] '>
              <th className='h-[60px] w-[16.5%]  flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px]'></th>
              <th className='h-[60px] w-[16.5%]  flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px]'></th>
              <th className='h-[60px] w-[16.5%]  flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px]'>Product</th>
              <th className='h-[60px] w-[16.5%]  flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px]'>Price</th>
              <th className='h-[60px] w-[16.5%]  flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px]'>Quantity</th>
              <th className='h-[60px] w-[16.5%]  flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse grow p-[10px]'>Subtotal</th>
            </tr>
            {cart.length > 0 ?


              cart.map((item) =>
                <tr className='w-full text-neutral-500 text-[1.1em] flex flex-col md:flex-row font-semibold' >
                  <td className='h-auto md:h-[150px] w-full md:w-[16.5%] py-[15px] px-[10px] flex justify-center items-center  border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse  box-border'>
                    <button onClick={() => { setCart(cart.filter(i => i.pid !== item.pid)) }} className='cursor-pointer'>
                      <svg class="w-10 h-10 text-gray-white dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" fill='#ef4444' d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </td>
                  <td className='h-[150px] w-full md:w-[16.5%] py-[15px] px-[10px] flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse box-border'>
                    <div className='bg-neutral-300 dark:bg-neutral-900 h-full p-[15px]'>
                      <img src={products[item.pid - 1].image} alt="" className='h-full' />
                    </div>
                  </td>
                  <td className='h-auto md:h-[150px] w-full md:w-[16.5%] py-[15px] px-[10px] flex justify-between md:justify-center items-center text-red-400 border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse box-border'>
                    <span className='text-neutral-500 md:hidden'>Product:</span>
                    <Link to={`/products/${products[item.pid - 1].id}`} className='w-[50%] md:w-full text-[1.2em] max-md:truncate md:[display:-webkit-box] md:[-webkit-line-clamp:2] md:[-webkit-box-orient:vertical] md:overflow-hidden'>{products[item.pid - 1].title}</Link >
                  </td>
                  <td className='h-auto md:h-[150px] w-full md:w-[16.5%] py-[15px] px-[10px] flex justify-between md:justify-center items-center text-[1.1em] border-[1px] border-neutral-300 dark:border-neutral-800  border-collapse  box-border'>
                    <span className='text-neutral-500 md:hidden'>Price:</span>
                    <span>{`$${products[item.pid - 1].price}`}</span>
                  </td>
                  <td className='h-auto md:h-[150px] w-full md:w-[16.5%] py-[15px] px-[10px]  flex justify-between md:justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse  box-border'>
                    <span className='text-neutral-500 md:hidden'>Quantity:</span>
                    <input type="number" defaultValue={item.qt} min={1} className='h-[50px] w-[55px]  border-[1px] outline-0 border-neutral-300 dark:border-neutral-800 text-[1.1em] p-[10px]' />
                  </td>
                  <td className='h-auto md:h-[150px] w-full md:w-[16.5%] py-[15px] px-[10px] flex justify-between md:justify-center items-center text-[1.1em] grow border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse'>
                    <span className='text-neutral-500 md:hidden'>Subtotal:</span>
                    <span>{`$${products[item.pid - 1].price * item.qt}`}</span>
                  </td>
                </tr>
              )
              :
              <tr className='w-full h-[300px] flex justify-center items-center'>
                <td className='text-[1.5em] text-neutral-500 font-semibold'>Your cart is currently empty.</td>
              </tr>
            }
            <tr aria-colspan={6} className='h-auto w-full flex max-md:flex-col gap-3 justify-between border-[1px] border-neutral-300 dark:border-neutral-800 p-[10px] box-border'>
              <div className='flex max-md:flex-col gap-3 items-center'>
                <input
                  className='h-[50px] w-[250px] max-md:w-full text-black dark:text-neutral-200 px-[10px] text-[1.2em] font-semibold border-[1px]   dark:border-neutral-800'
                  type="text" placeholder='Coupon code' />
                <button className='h-[45px] w-[200px] max-md:w-full rounded-[10px] bg-neutral-800 dark:bg-neutral-100 text-gray-200 dark:text-black font-bold text-[1.2em] cursor-pointer'>Apply Coupon</button>
              </div>
              <div className='flex justify-end max-md:justify-center items-center'>
                <button className='h-[45px] w-[200px] max-md:w-full text-gray-200 dark:text-black rounded-[10px] text-[1.2em] font-bold bg-neutral-800 dark:bg-neutral-100 cursor-pointer'>Update Cart</button>
              </div>
            </tr>
          </table>

          <div className=''>

          </div>
        </div>

      </div>
      <SubscribeSection />
      <InstagramHeading />
      <Footer />
    </div>
  )
}

export default Cart