import React from 'react'
import Nav from './Nav'
import SecNav from './SecNav'

const Header = () => {
    return (
        <>
            <div className='flex flex-col h-[150px] lg:h-[260px] w-[100%] '>
                <Nav />
                <SecNav/>
            </div>
        </>
    )
}

export default Header