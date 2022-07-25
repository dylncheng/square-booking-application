import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function ProtectedRoute({children}) {

    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push('/Login')
        }
    }, [router, user])

  return <>{user ? children : null}</>
}
