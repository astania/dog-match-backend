import { React, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddDogForm = ({ user, onAddDog }) => {
    const blankDogInput = {
        name: "",
        breed: "",
        about_me: "",
        profile_pic: "",
        user_id: user.id
    }

    const [dogInput, setDogInput] = useState(blankDogInput)

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
            body: JSON.stringify(dogInput),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(dogInfo => onAddDog(dogInfo))
                        .then(setDogInput(blankDogInput))
                } else {
                    // res.json().then( e => setErrors(Object.entries(e.error).flat()))
                    // res.json().then( e => console.log("Errors:", e))
                    console.log("error")
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

            <Button variant="primary" type="submit">
                Add Dog
            </Button>
        </Form>
        // <div >
        //     <h4>Add a Dog:</h4>
        //     <form onSubmit={handleSubmit}>
        //         <div className="form-group">
        //             <label> Name:
        //                 <input type="text" name="name" value={dogInput.name} onChange={handleChange} />
        //             </label>
        //             <label> Breed:
        //                 <input type="text" name="breed" value={dogInput.breed} onChange={handleChange} />
        //             </label>
        //         </div>
        //         <div className="form-group">
        //             <label> Profile Pic URL:
        //                 <input type="text" name="profile_pic" value={dogInput.profile_pic} onChange={handleChange} />
        //             </label>
        //         </div>
        //         <div className="form-group">
        //             <label> About Me:
        //                 <textarea name="about_me" rows="4" cols="50" value={dogInput.about_me} onChange={handleChange}></textarea>
        //             </label>
        //         </div>


        //         <button className="btn btn-primary" type="submit" value="add_dog">Add Dog</button>
        //     </form>
        // </div>
    )
}

export default AddDogForm