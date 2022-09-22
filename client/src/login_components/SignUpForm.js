import React from 'react'
import { useState } from 'react'

const SignUpForm = ({ onLogin }) => {
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordDoesNotMatch, setPasswordDoesNotMatch] = useState(false)
    const blankUserTemplate = {
        username: "", 
        password: "", 
        firstName: "",
        lastName: "",
        aboutMe: "",
        profilePic: ""
    }
    const [newUser, setNewUser] = useState(blankUserTemplate)

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name 

        setNewUser({
            ...newUser, [name]: value
        })
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log("new user", newUser)
        if (newUser.password === confirmPassword) {
            setPasswordDoesNotMatch(false)
            fetch("/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
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
                <label> Username:
                    <input type="text" name="username" value={newUser.username} onChange={handleChange} />
                </label>
                <label> Password:
                    <input type="text" name="password" value={newUser.password} onChange={handleChange} />
                </label>
                <label> Confirm Password:
                    <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                {passwordDoesNotMatch ? <p>password must match</p> : ""}
                <label> First Name:
                    <input type="text" name="firstName" value={newUser.firstName} onChange={handleChange} />
                </label>
                <label> Last Name:
                    <input type="text" name="lastName" value={newUser.lastName} onChange={handleChange} />
                </label>
                <label> About Me:
                    <input type="text" name="aboutMe" value={newUser.aboutMe} onChange={handleChange} />
                </label>
                <label> Profile Pic URL:
                    <input type="text" name="profilePic" value={newUser.profilePic} onChange={handleChange} />
                </label>

                <button type="submit" value="Login">Create Account</button>
            </form>
            <h4>Already have an account?</h4>
            <button onClick={() => setNewUser(false)}>Login</button>
        </div>
    )
}

export default SignUpForm