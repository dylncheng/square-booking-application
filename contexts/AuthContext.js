import React, { useContext, useState, useEffect } from "react"
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function signup(email, pw) {
        return auth.createUserWithEmailAndPassword(email, pw)
    }

    function login (email, pw) {
        return auth.signInWithEmailAndPassword(email, pw)
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser({
                    uid : user.uid,
                    email: user.email,
                    displayName: user.displayName,
                })
            }   else {
                setUser(null)
            }
                setLoading(false)
            })

        return unsubscribe
    }, [])
    

    const value = {
        user,
        login,
        signup,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}