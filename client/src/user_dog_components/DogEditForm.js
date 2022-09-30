import {React, useState} from 'react'

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
        <div>
            <h4>Update {updatedDog.name}:</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name"> Name:
                        <input className="form-control" id="name" type="text" name="name" value={updatedDog.name} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="breed"> Breed:
                        <input className="form-control" id="breed" type="text" name="breed" value={updatedDog.breed} onChange={handleChange} />
                    </label>
                </div>
                <label htmlFor="about_me" > About Me:
                    <textarea className="form-control" id="about_me" name="about_me" rows="4" cols="50" value={updatedDog.about_me} onChange={handleChange}></textarea>
                </label>
                <label htmlFor="profile_pic" > Profile Pic URL:
                    <input className="form-control" id="profile_pic" type="text" name="profile_pic" value={updatedDog.profile_pic} onChange={handleChange} />
                </label>

                <button type="submit">Edit Dog</button>

            </form>

        </div>
    )
}

export default DogEditForm