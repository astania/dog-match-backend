import { React, useState } from 'react'

const ProfileEditForm = ({ user, setUser, onLogin }) => {
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordDoesNotMatch, setPasswordDoesNotMatch] = useState(false)

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setUser({
            ...user, [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // console.log("user", user)
        if (user.password === confirmPassword) {
            setPasswordDoesNotMatch(false)
            fetch("/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
                .then(res => {
                    if (res.ok) {
                        res.json().then(userInfo => onLogin(userInfo))
                    } else {
                        // res.json().then( e => setErrors(Object.entries(e.error).flat()))
                        // res.json().then( e => console.log("Errors:", e))
                        console.log("error")
                    }
                })

        } else {
            setPasswordDoesNotMatch(true)
        }
    }

    return (
        <div>
            <h4>Create an account:</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username"> Username:
                        <input className="form-control" id="username" type="text" name="username" value={user.username} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                <label htmlFor="password"> Password:
                    <input className="form-control" id="password" type="text" name="password" value={user.password} onChange={handleChange} />
                </label>
                <label htmlFor="confirmPassword" > Confirm Password:
                    <input className="form-control" id="confirmPassword" type="text" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                {passwordDoesNotMatch ? <p>password must match</p> : ""}
                <label htmlFor="first_name"> First Name:
                    <input className="form-control" id="first_name" type="text" name="first_name" value={user.first_name} onChange={handleChange} />
                </label>
                </div>
                <label htmlFor="last_name"> Last Name:
                    <input className="form-control" id="last_name" type="text" name="last_name" value={user.last_name} onChange={handleChange} />
                </label>
                <label htmlFor="about_me" > About Me:
                    <textarea className="form-control" id="about_me" name="about_me" rows="4" cols="50" value={user.about_me} onChange={handleChange}></textarea>
                </label>
                <label htmlFor="profile_pic" > Profile Pic URL:
                    <input className="form-control" id="profile_pic" type="text" name="profile_pic" value={user.profile_pic} onChange={handleChange} />
                </label>

                <button type="submit">Edit Account</button>

            </form>

        </div>
    )
}

export default ProfileEditForm