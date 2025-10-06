import React, { useContext } from 'react'
import Header from '../components/Header'
import ToggleNav from '../components/ToggleNav'
import { CartContext } from '../context/CartContext'
import Product from '../components/Product'
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
        <div className='w-full flex flex-col items-center '>
          <div className='w-full max-w-[1400px] p-[15px] flex flex-col items-center'>
            <table className='border-[1px] border-neutral-800 h-auto w-full max-w-[900px] flex flex-col'>
              <tr className='w-full flex bg-[#061817] text-neutral-50 text-[1.2em] '>
                <th className='h-[60px] w-[16.5%] flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px]'></th>
                <th className='h-[60px] w-[16.5%] flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px]'></th>
                <th className='h-[60px] w-[16.5%] flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px]'>Product</th>
                <th className='h-[60px] w-[16.5%] flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px]'>Price</th>
                <th className='h-[60px] w-[16.5%] flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px]'>Quantity</th>
                <th className='h-[60px] w-[16.5%] flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse grow p-[10px]'>Subtotal</th>
              </tr>
              {cart.map((item) =>
                <tr className='w-full text-neutral-400 text-[1.1em] flex font-semibold' >
                  <td className='h-[150px] w-[16.5%] flex justify-center items-center  border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px] box-border'>
                    <button onClick={() => { setCart(cart.filter(i => i.pid !== item.pid)) }} className='cursor-pointer'>
                      <svg class="w-10 h-10 text-gray-white dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" fill='#db2d23' d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </td>
                  <td className='h-[150px] w-[16.5%] flex justify-center items-center border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px] box-border'>
                    <div className='bg-neutral-900 h-[80%] p-[15px]'>
                      <img src={products[item.pid - 1].image} alt="" className='h-full' />
                    </div>
                  </td>
                  <td className='h-[150px] w-[16.5%] flex justify-center items-center text-red-500 border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse p-[10px] box-border'>
                    <Link to={`/products/${products[item.pid - 1].id}`} className='text-[1.2em] [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden'>{products[item.pid - 1].title}</Link >
                  </td>
                  <td className='h-[150px] w-[16.5%] flex justify-center items-center text-[1.1em] border-[1px] border-neutral-300 dark:border-neutral-800  border-collapse p-[10px] box-border'>
                    <span>{`$${products[item.pid - 1].price}`}</span>
                  </td>
                  <td className='h-[150px] w-[16.5%] flex justify-center items-center border-[1px] border-neutral-800 border-collapse p-[10px] box-border'>
                    <input type="number" defaultValue={item.qt} min={1} className='h-[50px] w-[55px] border-[1px] outline-0 border-neutral-300 dark:border-neutral-800 text-[1.1em] p-[10px]' />
                  </td>
                  <td className='h-[150px] w-[16.5%] flex justify-center items-center text-[1.1em] grow border-[1px] border-neutral-300 dark:border-neutral-800 border-collapse'>
                    <span>{`$${products[item.pid - 1].price * item.qt}`}</span>
                  </td>
                </tr>
              )}
              <tr aria-colspan={6} className='h-[80px] w-full flex justify-between border-[1px] border-neutral-300 dark:border-neutral-800 p-[10px] box-border'>
                <div className='flex gap-3 items-center'>
                  <input 
                  className='h-[50px] w-[250px] text-neutral-200 px-[10px] text-[1.2em] font-semibold border-[1px] border-neutral-300 dark:border-neutral-800'
                  type="text" placeholder='Coupon code'/>
                  <button className='h-[45px] w-[200px] rounded-[10px] bg-neutral-100 text-black font-bold text-[1.2em] cursor-pointer'>Apply Coupon</button>
                </div>
                <div className='flex justify-end items-center'>
                  <button className='h-[45px] w-[250px] rounded-[10px] text-[1.2em] font-bold bg-neutral-100 cursor-pointer'>Update Cart</button>
                </div>
              </tr>
            </table>

            <div className=''>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart