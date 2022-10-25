import { React, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const AddDogForm = ({ user, onAddDog }) => {

    const blankDogInput = {
        name: "",
        breed: "",
        about_me: "",
        profile_pic: "",
        user_id: user.id
    }

    const [dogInput, setDogInput] = useState(blankDogInput)
    const [errors, setErrors] = useState([])

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setDogInput({
            ...dogInput, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...dogInput, user_id: user.id }),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(dogInfo => onAddDog(dogInfo))
                        .then(setDogInput(blankDogInput))
                        .then(setErrors([]))
                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))
                }
            })
    }


    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3 col-4">
                <Form.Label>Dog Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" value={dogInput.name} onChange={handleChange} />
                <Form.Label>Breed</Form.Label>
                <Form.Control type="text" placeholder="Enter breed" name="breed" value={dogInput.breed} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3 col-4" >
                <Form.Label>Profile Pic URL</Form.Label>
                <Form.Control type="text" placeholder="" name="profile_pic" value={dogInput.profile_pic} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3 col-4" >
                <Form.Label>About me</Form.Label>
                <Form.Control as="textarea" rows="4" placeholder="Briefly describe your dog!" name="about_me" value={dogInput.about_me} onChange={handleChange} />
            </Form.Group>

            {errors.length > 0 ?
                <ul style={{ color: "red" }}>
                    {errors.map((error) => (
                        <li key={error}> {error} </li>
                    ))}
                </ul>
                : ""}

            <Button variant="primary" type="submit">
                Add Dog
            </Button>

        </Form>

    )
}

export default AddDogForm