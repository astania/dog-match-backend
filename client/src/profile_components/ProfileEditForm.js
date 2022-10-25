import { React, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

const ProfileEditForm = ({ user, onLogin, setToggleEdit }) => {

    const [updatedUser, setUpdatedUser] = useState(user)
    const [errors, setErrors] = useState([])


    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setUpdatedUser({
            ...updatedUser, [name]: value
        })
    }
    console.log("errors", errors)
    console.log("user", user)
    console.log("updated user", updatedUser)

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`/users/${updatedUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(userInfo => onLogin(userInfo))
                        .then(setToggleEdit(false))
                        .then(setErrors([]))

                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))
                    
                }
            })
    }


    return (
        <Container>

            <Form onSubmit={handleSubmit} className=" col-10 text-center">
                <h5>Update your Account</h5>

                <Form.Group className="col-5 mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" value={updatedUser.username} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="col-5 mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="first_name" value={updatedUser.first_name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="col-5 mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="last_name" value={updatedUser.last_name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="col-5 mb-3" >
                    <Form.Label>Profile Pic URL</Form.Label>
                    <Form.Control type="text" name="profile_pic" value={updatedUser.profile_pic} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="col-5 mb-3" >
                    <Form.Label>About me</Form.Label>
                    <Form.Control as="textarea" rows="4" placeholder="Briefly describe yourself!" name="about_me" value={updatedUser.about_me} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save Changes
                </Button>

            </Form>

        </Container>

    )
}

export default ProfileEditForm