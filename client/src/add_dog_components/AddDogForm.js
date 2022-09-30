import {React, useState} from 'react'

const AddDogForm = ({user, onAddDog}) => {
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
    <div>
            <h4>Add a Dog:</h4>
            <form onSubmit={handleSubmit}>
                <label> Name:
                    <input type="text" name="name" value={dogInput.name} onChange={handleChange} />
                </label>
                <label> Breed:
                    <input type="text" name="breed" value={dogInput.breed} onChange={handleChange} />
                </label>
                <label> About Me:
                    {/* <input type="text" name="about_me" value={user.about_me} onChange={handleChange} /> */}
                    <textarea name="about_me" rows="4" cols="50" value={dogInput.about_me} onChange={handleChange}></textarea>
                </label>
                <label> Profile Pic URL:
                    <input type="text" name="profile_pic" value={dogInput.profile_pic} onChange={handleChange} />
                </label>

                <button type="submit" value="add_dog">Add Dog</button>
            </form>
        </div>
  )
}

export default AddDogForm