import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import CartContextProvider from './context/CartContext.jsx'
import ProductsContextProvider from './context/ProductsContext.jsx'
import AuthContextProvider from './context/AuthContext.jsx'
import NavContextProvider from './context/NavContext.jsx'
import ThemeContextProvider from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <ProductsContextProvider>
          <NavContextProvider>
            <CartContextProvider>
              <BrowserRouter>
                <div className=''>
                  <App />
                </div>
              </BrowserRouter>
            </CartContextProvider>
          </NavContextProvider>
        </ProductsContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </StrictMode >,
)
