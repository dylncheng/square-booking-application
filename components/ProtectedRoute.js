import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

const ProtectedRoute = ({children}) => {

    const { currentUser } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!currentUser) {
            router.push('/Login')
        }
    }, [router, currentUser])

  return <>{currentUser ? children : null}</>
}

export default ProtectedRoute