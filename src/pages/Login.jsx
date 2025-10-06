import React, { memo, useContext, useReducer, useRef } from 'react'
import TopHeading from '../components/TopHeading'
import { Link } from 'react-router'
import { auth } from '../firebase/firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../context/AuthContext';


const Login = memo(() => {

  let passInp = useRef(null)
  let emailInp = useRef(null)

  let { user } = useContext(AuthContext)

  console.log(user)



  let loginerUser = async () => {

    try {

      const response = await signInWithEmailAndPassword(auth, emailInp.current.value, passInp.current.value)
      const user = response.user
      console.log(user)

    } catch (error) {
      console.error(error.message)
      console.error(error.code)

    }

  }

  return (
    <>
      <TopHeading heading={'Sign in'} />

      <div className='w-full h-[700px] flex justify-start p-[10px]  md:p-[30px]'>
        <div className='h-[600px] w-full max-w-[900px] flex flex-col gap-10 items-center md:items-start justify-center text-black dark:text-gray-50  rounded-[15px] box-border'>

          <h2 className='text-[2.4em] lg:text-[2.7em] font-bold text-center'>Login</h2>
          <div className='h-full w-full flex flex-col gap-7 items-center md:items-start'>
            <div className='w-full flex flex-col gap-1 '>
              <label className='px-[5px] font-semibold text-[1.1em] tracking-wide' htmlFor="email-input">Email</label>
              <input
                ref={emailInp}
                className='input'
                type="email" name="" id="email-input" placeholder='Enter Your Email Address' autoComplete='off' />
            </div>
            <div className='w-full flex flex-col gap-1'>
              <label className='px-[5px] font-semibold text-[1.1em] tracking-wide' htmlFor="pass-input">Password</label>
              <input
                ref={passInp}
                className='input'
                type="password" name="" id="pass-input" placeholder='Enter Your Password' />
            </div>
            <div className='flex flex-col items-center md:items-start gap-3'>
              <button onClick={() => { loginerUser() }} className='h-[50px] w-[150px] text-[1.5em] text-neutral-50 dark:text-black bg-black dark:bg-gray-50 font-bold rounded-[10px] mt-8 cursor-pointer'>Login</button>
              <p>Dont Have Acount <Link to={'/auth/rejister'} className='text-red-400'>Sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export default Login