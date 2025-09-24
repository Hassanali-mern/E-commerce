import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import CartContextProvider from './context/CartContext.jsx'
import ProductsContextProvider from './context/ProductsContext.jsx'
import AuthContextProvider from './context/AuthContext.jsx'
import NavContextProvider from './context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ProductsContextProvider>
        <NavContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartContextProvider>
        </NavContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  </StrictMode >,
)
