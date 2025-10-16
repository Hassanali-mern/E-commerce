import React from 'react'
import Nav from './Nav'
import SecNav from './SecNav'

const Header = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center  h-[100px] md:h-[120px] lg:h-[250px] w-[100%] '>
                <Nav />
                <SecNav />
            </div>
        </>
    )
}

export default Header