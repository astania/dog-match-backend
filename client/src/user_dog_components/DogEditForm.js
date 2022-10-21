import {React, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DogEditForm = ({ dog, onEditDog, setEditDog }) => {
    const [updatedDog, setUpdatedDog] = useState(dog)


    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setUpdatedDog({
            ...updatedDog, [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/dogs/${updatedDog.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedDog),
        })
            .then(res => {
                if (res.ok) {
                    // res.json().then(dogInfo => onEditDog(dogInfo))
                    res.json().then(dogInfo => onEditDog(dogInfo)).then(setEditDog(false))
                    // res.json().then(dogInfo => console.log(dogInfo))

                } else {
                    // res.json().then( e => setErrors(Object.entries(e.error).flat()))
                    // res.json().then( e => console.log("Errors:", e))
                    console.log("error")
                }
            })
    }

    return (

        <Form  onSubmit={handleSubmit}>
            <h5>Update {updatedDog.name}'s Profile:</h5>
        <Form.Group className="col-3 mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={updatedDog.name} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="col-3 mb-3">
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" name="breed" value={updatedDog.breed} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="col-3 mb-3">
          <Form.Label>About me</Form.Label>
          <Form.Control type="text" name="about_me" rows="4" cols="50" value={updatedDog.about_me} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="col-3 mb-3">
          <Form.Label>Profile Pic</Form.Label>
          <Form.Control id="profile_pic" type="text" name="profile_pic" value={updatedDog.profile_pic} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-3">
          Save
        </Button>
      </Form>
        
    )
}

export default DogEditForm

















