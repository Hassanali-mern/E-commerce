import React from 'react'
import Header from '../components/Header'
import TopHeading from '../components/TopHeading'
import Login from './Login'
import Rejister from './Rejister'
import { Outlet } from 'react-router'
import ToggleNav from '../components/ToggleNav'

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