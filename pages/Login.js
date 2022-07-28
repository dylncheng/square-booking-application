import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

export default function Login() {
  const router = useRouter()
  const emailRef = useRef()
  const passwordRef = useRef()
  const { currentUser, login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  async function handleSubmit(e) {
    e.preventDefault()

    console.log(currentUser)

    try {
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        router.push('/')
    } catch (err) {
        console.log(err)
        setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit = {handleSubmit}>
                    <Form.Group id = "email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" ref = {emailRef} />
                    </Form.Group>
                    <Form.Group id = "password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" ref = {passwordRef} />
                    </Form.Group>
                    <Button disabled = {loading} className = "w-100" type="submit">
                        Log In
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className = "w-100 text-center mt-2">
            Don't have an account yet? <Link href='/Signup'><a style={{color:"#0000EE"}}>Sign Up.</a></Link>
        </div>
    </>
  )
}
