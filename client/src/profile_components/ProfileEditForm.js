import { React, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ProfileEditForm = ({ user, onLogin, setToggleEdit }) => {

    const [updatedUser, setUpdatedUser] = useState(user)

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setUpdatedUser({
            ...updatedUser, [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(updatedUser)
        fetch(`/users/${updatedUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(userInfo => onLogin(userInfo)).then(setToggleEdit(false))

                } else {
                    // res.json().then( e => setErrors(Object.entries(e.error).flat()))
                    // res.json().then( e => console.log("Errors:", e))
                    console.log("error")
                }
            })
    }



    return (

        <Form onSubmit={handleSubmit}>
            <h5>Update your Account</h5>
            <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" value={updatedUser.username} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="first_name" value={updatedUser.first_name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="last_name" value={updatedUser.last_name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Profile Pic URL</Form.Label>
                <Form.Control type="text" name="profile_pic" value={updatedUser.profile_pic} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>About me</Form.Label>
                <Form.Control as="textarea" rows="4" placeholder="Briefly describe yourself!" name="about_me" value={updatedUser.about_me} onChange={handleChange} />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Save Changes
            </Button>
        </Form>

        // <div>
        //     <h4>Update your account:</h4>
        //     <form onSubmit={handleSubmit}>
        //         <div className="form-group">
        //             <label htmlFor="username"> Username:
        //                 <input className="form-control" id="username" type="text" name="username" value={updatedUser.username} onChange={handleChange} />
        //             </label>
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="first_name"> First Name:
        //                 <input className="form-control" id="first_name" type="text" name="first_name" value={updatedUser.first_name} onChange={handleChange} />
        //             </label>
        //         </div>
        //         <label htmlFor="last_name"> Last Name:
        //             <input className="form-control" id="last_name" type="text" name="last_name" value={updatedUser.last_name} onChange={handleChange} />
        //         </label>
        //         <label htmlFor="about_me" > About Me:
        //             <textarea className="form-control" id="about_me" name="about_me" rows="4" cols="50" value={updatedUser.about_me} onChange={handleChange}></textarea>
        //         </label>
        //         <label htmlFor="profile_pic" > Profile Pic URL:
        //             <input className="form-control" id="profile_pic" type="text" name="profile_pic" value={updatedUser.profile_pic} onChange={handleChange} />
        //         </label>

        //         <button type="submit">Edit Account</button>

        //     </form>

        // </div>
    )
}

export default ProfileEditForm