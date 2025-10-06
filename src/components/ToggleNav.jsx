import React, { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import { Link } from 'react-router'
import SearchBox from './SearchBox'

const ToggleNav = () => {
    const { isToggle, setIsToggle } = useContext(NavContext)

    return (

        <>
            <div className={`w-full h-[340px] flex flex-col transform ${isToggle ? 'translate-x-0':'-translate-x-[100%]'} [transition:all_0.4s_ease-in-out] absolute top-0 left-0 bg-white dark:bg-black z-1 border-t-[1px] border-neutral-700`} >
                <ul className='flex flex-col list-none'>
                    <li className='toggle-nav-option'>
                        <Link to={'/'} onClick={() => { setIsToggle(!isToggle) }}>Home</Link>
                    </li>
                    <li className='toggle-nav-option'>
                        <Link to={'/products'} onClick={() => { setIsToggle(!isToggle) }}>All Products</Link>
                    </li>
                    <li className='toggle-nav-option'>
                        <Link to={'/'} onClick={() => { setIsToggle(!isToggle) }}>Men's Clothing</Link>
                    </li>
                    <li className='toggle-nav-option'>
                        <Link to={'/'} onClick={() => { setIsToggle(!isToggle) }}>Electronics</Link>
                    </li>
                    <li className='toggle-nav-option'>
                        <Link to={'/'} onClick={() => { setIsToggle(!isToggle) }}>Women's Clothing</Link>
                    </li>
                </ul>
                <SearchBox />
            </div >

        </>
    )
}

export default ToggleNav