import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextPovider = ({ children }) => {

  let [theme, setTheme] = useState('light') ;



  return (
    <ThemeContext value={{theme,setTheme}}>
      {children}
    </ThemeContext>
  )
}

export default ThemeContextPovider