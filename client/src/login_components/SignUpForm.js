import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const SignUpForm = ({ setIsNewUser, onLogin }) => {
    // const [confirmPassword, setConfirmPassword] = useState("")
    // const [passwordDoesNotMatch, setPasswordDoesNotMatch] = useState(false)
    const [errors, setErrors] = useState([])

    const blankUserTemplate = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        about_me: "",
        profile_pic: ""
    }

    const [userInput, setUserInput] = useState(blankUserTemplate)

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setUserInput({
            ...userInput, [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // if (userInput.password === confirmPassword) {
        //     setPasswordDoesNotMatch(false)
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInput),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(userInfo => onLogin(userInfo))
                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))
                }
            })

        // }  else {
        //     setPasswordDoesNotMatch(true)
        // }
    }

    return (
        <Container>
            <div className="text-center">
                <h4>Create an account:</h4>

                <Form className="mb-4" onSubmit={handleSubmit}>

                    <Form.Group className="mb-3"  >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" value={userInput.username} onChange={handleChange} placeholder="name@email.com" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col}  >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={userInput.password} onChange={handleChange} placeholder="*****" />
                        </Form.Group>

                        {/* <Form.Group as={Col} >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Form.Group> */}
                    </Row>

                    {/* {passwordDoesNotMatch ? <b><em>password must match</em></b> : ""} */}
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="first_name" value={userInput.first_name} onChange={handleChange} placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="last_name" value={userInput.last_name} onChange={handleChange} placeholder="Last Name" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" >
                        <Form.Label>Profile Pic URL</Form.Label>
                        <Form.Control type="text" name="profile_pic" value={userInput.profile_pic} onChange={handleChange} placeholder="https://i.imgur.com/GuAB8OE.jpeg" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>About me</Form.Label>
                        <Form.Control as="textarea" rows="4" placeholder="Briefly describe yourself!" name="about_me" value={userInput.about_me} onChange={handleChange} />
                    </Form.Group>

                    {errors.length > 0 ?
                        <div style={{ color: "red" }} className="mb-3">
                            {errors.map((error) => (
                                <li key={error}> {error} </li>
                            ))}
                        </div>
                        : ""}

                    <Button variant="primary" type="submit">
                        Create Account
                    </Button>

                </Form>

                <h4>Already have an account?</h4>
                <button className="btn btn-secondary mb-4" onClick={() => setIsNewUser(false)}>Login</button>

            </div >
        </Container>
    )
}

export default SignUpForm