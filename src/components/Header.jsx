import React from 'react'
import Nav from './Nav'
import SecNav from './SecNav'
import ToggleNav from './ToggleNav'

const Header = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center h-[100px] md:h-[150px] lg:h-[260px] w-[100%] '>
                <Nav />
                <SecNav />
            </div>
        </>
    )
}

export default Header