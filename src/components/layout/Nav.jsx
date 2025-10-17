import React, { useContext, useState } from 'react'
import { Link } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { NavContext } from '../../context/NavContext'
import { ThemeContext } from '../../context/ThemeContext'

const Nav = () => {

  const { cart } = useContext(CartContext)
  const { isToggle, setIsToggle } = useContext(NavContext)
  const { theme, setTheme } = useContext(ThemeContext)
  let [isDark, setIsDark] = useState(true)

  console.log(theme)

  let showNav = () => {
    setIsToggle(!isToggle)
  }


  return (
    <div className='h-[80px] lg:h-[70%] w-[100%] max-w-[1400px] flex justify-center '>
      <div className='h-[100%] w-[25%] lg:w-[20%] hidden lg:flex gap-5 items-center justify-center'>
        <>
          <svg
            className="w-7 h-7 social-links text-neutral-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="w-7 h-7 social-links text-neutral-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd" />
          </svg>
          <svg
            className="w-7 h-7 social-links text-neutral-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"
            />
          </svg>
          <svg
            className="w-6 h-7 social-links text-neutral-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"
          >
            <path
              fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"
            />
          </svg>
        </>


      </div>
      <div className=' w-[30%] md:w-[15%] lg:w-0 lg:hidden flex items-center justify-center outline-0'>
        <button onClick={showNav} className='h-[40px] w-[40px]'>
          {isToggle ?

            <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" /> </svg>
            :
            <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" > <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h14" />   </svg>

          }
        </button>
      </div>
      <div className='h-[100%] w-[60%] sm:w-[70%] lg:w-[60%] flex flex-col justify-center items-center box-border'>
        <Link to={'/'} className='flex gap-2 items-center'>
          <h1 className="text-black dark:text-gray-50 text-[1.6em] sm:text-[2em] text-center text-wrap lg:text-[2.7em] font-bold hover:text-red-500 [transition:color_0.5s_ease-in-out]">
            Aurelia Mart
          </h1>
        </Link>
        <p className="text-[1em] text-black dark:text-gray-50 text-center hidden sm:block">
          Consectetur ipsum dolor sit amet adipisicing.
        </p>

      </div>
      <div className="h-[100%] w-[35%] md:w-[20%] flex gap-1 sm:gap-5 px-[10px] items-center justify-center">
        <Link className=" hidden lg:flex  h-[40px] w-[40px]  items-center" >
          <svg
            className=" w-7 h-7 text-neutral-800 dark:text-gray-300 hover:dark:text-red-500 [transition:color_0.5s_ease-in-out]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </Link>
        <Link to={'/auth'} className='relative h-[40px] w-[40px] flex items-center'>
          <svg
            className="w-7 h-7 text-neutral-800 dark:text-gray-300 hover:dark:text-red-500 [transition:color_0.5s_ease-in-out]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor" strokeWidth={2} d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </Link>
        <Link to={'/cart'} className='relative h-[40px] w-[40px] flex items-center'>
          <svg
            className="w-7 h-7 text-neutral-800 dark:text-gray-300 hover:dark:text-red-500 [transition:color_0.5s_ease-in-out]" aria-hidden='true' xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"none"} viewBox="0 0 24 24"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
            />
          </svg>
          {(cart.length > 0) ? <span className='bg-red-500 text-[0.7em] font-semibold flex justify-center items-center text-gray-50 h-[20px] w-[20px] rounded-[50%] absolute top-0 right-0'>{cart.length}</span> : null}
        </Link>
        <button onClick={() => { setIsDark(!isDark), setTheme((theme === "dark") ? 'light' : 'dark') }} className='relative h-[40px] w-[40px] flex items-center cursor-pointer'>
          {isDark ?
            <svg class="w-7 h-7 text-neutral-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
            </svg>
            :
            <svg class="w-7 h-7 text-neutral-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
            </svg>
          }
        </button>
      </div>
    </div>
  )
}

export default Nav