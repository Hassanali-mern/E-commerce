import React from 'react'
import Header from '../components/layout/Header'
import TopHeading from '../components/layout/ToggleNav'
import Login from './Login'
import Rejister from './Rejister'
import { Outlet } from 'react-router'
import ToggleNav from '../components/layout/'

const Auth = () => {
  return (
    <div>
      <Header />
      <div className='relative'>
        <ToggleNav/>
      </div>
      <Outlet/>
    </div>
  )
}

export default Auth