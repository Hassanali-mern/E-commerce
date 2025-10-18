import React, { memo, useRef } from 'react'
import TopHeading from '../components/common/TopHeading'
import { Link } from 'react-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Rejister = memo(() => {

  const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6, "password must have 6 chars")
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }

  } = useForm({
    resolver: yupResolver(schema)
  })

  let onSubmit = async ({email,password}) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      const user = response.user
      console.log(user)

    } catch (error) {
      console.error(error.message)
      console.error(error.code)

    }

  }


  return (
    <>
      <TopHeading heading={'Sign up'} />

      <div className='w-full h-[700px] flex justify-start p-[10px]  md:p-[30px]'>
        <div className='h-[600px] w-full max-w-[900px] flex flex-col gap-10 items-center md:items-start justify-center  text-black dark:text-gray-50  rounded-[15px]  box-border'>

          <h2 className=' text-[2.4em] lg:text-[2.7em] font-bold text-left md:text-center'>Create Acount</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='h-full w-full flex flex-col gap-7 items-center md:items-start'>
            <div className='w-full flex flex-col gap-1 '>
              <label className='px-[5px] font-semibold text-[1.1em] tracking-wide' htmlFor="email-input">Email</label>
              <input
                {...register("email")}
                className='input'
                type="email" id="email-input" placeholder='Enter Your Email Address' />
              <span className='text-red-400 '>{errors?.email?.message}</span>
            </div>
            <div className='w-full flex flex-col gap-1'>
              <label className='px-[5px] font-semibold text-[1.1em] tracking-wide' htmlFor="pass-input">Password</label>
              <input
                {...register("password")}
                className='input'
                type="password" id="pass-input" placeholder='Enter Your Password' />
              <span className='text-red-400'>{errors?.password?.message}</span>
            </div>
            <div className='flex flex-col items-center md:items-start gap-3'>
              <button className='h-[50px] w-[150px] text-[1.4em] text-gray-50 dark:text-black bg-black dark:bg-gray-50 font-bold rounded-[10px] mt-8 cursor-pointer'>Sign up</button>
              <p>Dont Have Acount <Link to={'/auth/login'} className='text-red-400 font-semibold'>Sign in</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
})

export default Rejister