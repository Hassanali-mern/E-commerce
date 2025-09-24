import React, { createContext, useState } from 'react'

export const NavContext = createContext();

const NavContextProvider = ({ children }) => {

    const [isToggle, setIsToggle] = useState(false);


    return (
        <NavContext value={{ isToggle,setIsToggle }}>
            {children}
        </NavContext>
    )
}

export default NavContextProvider