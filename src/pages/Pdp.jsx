import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router'
import axios from 'axios'
import { ProductsContext } from '../context/ProductsContext'

const Pdp = () => {

  let {id}  = useParams()
  let {products} = useContext(ProductsContext)
  console.log(products)
  let product = products[+id - 1]

  return (
    <div>
      <Header />
      <div className='text-gray-50'>
        <h1 className='text-[3em] text-center'>{product?.title}</h1>
      </div>
    </div>
  )
}

export default Pdp