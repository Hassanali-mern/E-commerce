import { useContext, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Landingpage from './pages/Landingpage'
import { Route, Routes } from 'react-router'
import Page404 from './pages/Page404'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Product from './components/Product'
import Pdp from './pages/Pdp'
import Login from './pages/Login'
import Rejister from './pages/Rejister'
import { AuthContext } from './context/AuthContext'

function App() {

  let { user } = useContext(AuthContext)

  if(user){
    console.log("yes")
  }else{
    
    console.log("no")
  }

  return (
    <>
      <div className='h-[100vh] w-[100vw] bg-black overflow-y-auto main-div '>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          {(!user) ?
            <Route path='/auth' element={<Auth />}>
              <Route index element={<Login />} />
              <Route index path='/auth/login' element={<Login />} />
              <Route path='/auth/rejister' element={<Rejister />} />
            </Route>
            :
            <Route path='/auth' element={<><Header/> <h1 className='text-gray-50 text-[5em] text-center mt-15'>You are ALready Login</h1></>}>
              <Route index path='/auth/*' element={<><Header/> <h1 className='text-gray-50 text-[5em] text-center mt-15'>You are ALready Login</h1></>} />
            </Route>
          }
          <Route path='/cart' element={<Cart />} />
          <Route path='/products'  >
            <Route index element={<Products />} />
            <Route path=':id' element={<Pdp />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>

    </>
  )
}

export default App
