import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Landingpage from './pages/Landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[100vh] w-[100vw] bg-black overflow-y-auto '>
        <Landingpage/>
      </div>
    </>
  )
}

export default App
