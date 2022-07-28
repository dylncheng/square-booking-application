import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

const ProtectedRoute = ({children}) => {

    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push('/Login')
        }
    }, [router, user])

  return <>{user ? children : null}</>
}

export default ProtectedRoute