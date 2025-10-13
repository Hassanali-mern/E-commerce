import React from 'react'
import Header from '../components/Header'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import FpSection from '../components/FpSection'
import ToggleNav from '../components/ToggleNav'
import Fcsection from '../components/Fcsection'
import SpecialSection from '../components/specialSection'


const Landingpage = () => {



  return (
    <div >
      <Header />
      <div className='relative'>
        <ToggleNav />
      </div>
      <Section1 />
      <Section2 />
      <FpSection />
      <Fcsection />
      <SpecialSection/>
    </div>
  )
}

export default Landingpage