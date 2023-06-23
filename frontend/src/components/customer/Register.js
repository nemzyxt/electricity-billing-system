import React from 'react'
import { Card, Form, Button} from 'react-bootstrap'

const Register = () => {
  return (
    <div style={{height: '70vh'}} className="d-flex align-items-center justify-content-center">
        <Card className="rounded mx-auto mt-5">
            <Card.Body className="text-center">
                <Card.Title>Register</Card.Title>
                <hr />
                <Form className="px-4 mx-2">
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create PayGrid Account
                    </Button>
                </Form>
                <hr />
                <Button variant="outline-success">
                    Back to LogIn
                </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Register
