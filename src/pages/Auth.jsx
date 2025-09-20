import React from 'react'
import Header from '../components/Header'
import TopHeading from '../components/TopHeading'
import Login from './Login'
import Rejister from './Rejister'
import { Outlet } from 'react-router'

const Auth = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  )
}

export default Auth