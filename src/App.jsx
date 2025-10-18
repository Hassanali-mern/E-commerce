import { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Section1 from './components/specific/Section1'
import Section2 from './components/specific/Section2'
import Landingpage from './pages/Landingpage'
import { Route, Routes } from 'react-router'
import Page404 from './pages/Page404'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Product from './components/layout/Product'
import Pdp from './pages/Pdp'
import Login from './pages/Login'
import Rejister from './pages/Rejister'
import { AuthContext } from './context/AuthContext'
import { ThemeContext } from './context/ThemeContext'
import MensClothing from './pages/MensClothing'
import WomensClothing from './pages/WomensClothing'
import Electronics from './pages/Electronics'
import Profile from './pages/Profile'

function App() {

  const { theme, setTheme } = useContext(ThemeContext)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <>
      <div className='h-[100vh] w-[100vw] bg-white dark:bg-black overflow-y-auto main-div'>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          {(!user) ?
            <Route path='/auth' element={<Auth />}>
              <Route index element={<Login />} />
              <Route index path='/auth/login' element={<Login />} />
              <Route path='/auth/rejister' element={<Rejister />} />
            </Route>
            :
            <Route path='/auth' element={<Profile />}>
              <Route index path='/auth/*' element={<Profile />} />
            </Route>
          }
          <Route path='/cart' element={<Cart />} />
          <Route path='/products'  >
            <Route index element={<Products />} />
            <Route path=':id' element={<Pdp />} />
          </Route>
          <Route path='/mensclothing'  >
            <Route index element={<MensClothing />} />
            <Route path=':id' element={<Pdp />} />
          </Route>
          <Route path='/womensclothing'  >
            <Route index element={<WomensClothing />} />
            <Route path=':id' element={<Pdp />} />
          </Route>
          <Route path='/electronics'  >
            <Route index element={<Electronics />} />
            <Route path=':id' element={<Pdp />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>

    </>
  )
}

export default App
