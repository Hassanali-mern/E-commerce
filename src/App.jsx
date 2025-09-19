import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Landingpage from './pages/Landingpage'
import { Route, Routes } from 'react-router'
import Page404 from './pages/Page404'
import Auth from './pages/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[100vh] w-[100vw] bg-black overflow-y-auto '>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </div>

    </>
  )
}

export default App
