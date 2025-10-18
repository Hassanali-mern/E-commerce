import React, { useContext, useRef, useState } from 'react'
import Header from '../components/layout/Header'
import TopHeading from '../components/common/TopHeading'
import { AuthContext } from '../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

const Profile = () => {

    let { user ,setUser} = useContext(AuthContext)
    let [isSignout, setIsSignout] = useState(false)

    let logout = () => {
        signOut(auth).then(() => {
            setIsSignout(false)
            setUser(null)
        }).catch((error) => {
            setIsSignout(true)
        });
    }

    return (
        <div className='h-full w-full '>
            <Header />
            <TopHeading heading={'Acount Overview'} />
            <div className='w-full flex justify-center'>
                <div className='h-full w-full max-w-[1400px] flex justify-center p-[30px]'>
                    <div className=' flex flex-col items-center gap-10'>
                        {!isSignout ?
                            <>
                                <h1 className=' text-black dark:text-gray-50 text-[2.2em] font-semibold text-center'>Signed in as {user.email}</h1>
                                <button onClick={logout} className='py-[10px] px-[40px] rounded-[10px] font-bold text-[1.7em] dark:text-black text-gray-50 bg-black dark:bg-gray-50 cursor-pointer'>Logout</button>
                            </>
                            :
                            <h1 className='text-black dark:text-gray-50 text-[2.2em] font-semibold'>Something went wrong</h1>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile