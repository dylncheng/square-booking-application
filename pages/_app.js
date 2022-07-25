import { Container } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { AuthProvider } from '../contexts/AuthContext'
import '../styles/globals.css'
import ProtectedRoute from '../components/ProtectedRoute'

const noAuthRequired = ['/Login', '/Signup']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthProvider>
  )
}

export default MyApp
