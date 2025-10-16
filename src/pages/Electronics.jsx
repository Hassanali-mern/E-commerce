import React, { useContext } from 'react'
import Product from '../components/layout/Product'
import SubscribeSection from '../components/specific/SubscribeSection'
import InstagramHeading from '../components/common/InstagramHeading'
import Footer from '../components/layout/Footer'
import ToggleNav from '../components/layout/ToggleNav'
import Header from '../components/layout/Header'
import { ProductsContext } from '../context/ProductsContext'
import { CartContext } from '../context/CartContext'

const Electronics = () => {
    let { products } = useContext(ProductsContext)
    let { cart, setCart } = useContext(CartContext)
    let electronicsArr = products.filter(p => p.category === "electronics");


    console.log(cart)
    return (
        <>
            <div>
                <Header />
                <div className='relative'>
                    <ToggleNav />
                </div>
                <div className='w-full flex justify-center ' >

                    <div className='w-full max-w-[1400px]  py-[30px] px-[20px] flex gap-10 flex-wrap justify-center'>
                        {electronicsArr.length > 0 ? electronicsArr?.map((item) =>
                            <Product product={item} key={item.id} />
                        )
                            :
                            [...Array(30)].map(() => (
                                <div className='flex flex-col items-center  gap-3 h-[400px] w-[310px] product-div '>
                                    <div className='h-[75%] w-full lg:relative flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-900 overflow-hidden'>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
                <SubscribeSection />
                <InstagramHeading />
                <Footer />
            </div>
        </>
    )
}

export default Electronics