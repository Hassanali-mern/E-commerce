import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import { auth } from '../firebase/firebaseConfig';

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    let [user,setUser] = useState(null)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            setUser(user)
        } else {

        }
    });

    return (
        <AuthContext value={{user,setUser}}>
            {children}
        </AuthContext>
    )
}

export default AuthContextProvider