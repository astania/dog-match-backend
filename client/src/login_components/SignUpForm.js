import React from 'react'
import { useState } from 'react'

const SignUpForm = ({ setIsNewUser, onLogin }) => {
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordDoesNotMatch, setPasswordDoesNotMatch] = useState(false)
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
        console.log("new user", userInput)
        if (userInput.password === confirmPassword) {
            setPasswordDoesNotMatch(false)
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
        <div className="text-center">
            <h4>Create an account:</h4>
            <form onSubmit={handleSubmit}>
                
                <div className="form-control">
                    <label> Username:
                        <input type="text" name="username" value={userInput.username} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-control">
                    <label> Password:
                        <input type="text" name="password" value={userInput.password} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-control">
                    <label> Confirm Password:
                        <input type="text" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>
                    {passwordDoesNotMatch ? <p>password must match</p> : ""}
                </div>
                <div className="form-control">
                    <label> First Name:
                        <input type="text" name="first_name" value={userInput.first_name} onChange={handleChange} />
                    </label>
                    <label> Last Name:
                        <input type="text" name="last_name" value={userInput.last_name} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-control">
                    <label> About Me:
                        {/* <input type="text" name="about_me" value={user.about_me} onChange={handleChange} /> */}
                        <textarea name="about_me" rows="4" cols="50" value={userInput.about_me} onChange={handleChange}></textarea>
                    </label>
                </div>
                <div className="form-control">
                    <label> Profile Pic URL:
                        <input type="text" name="profile_pic" value={userInput.profile_pic} onChange={handleChange} />
                    </label>
                </div>

                <button className="btn btn-primary" type="submit" value="Login">Create Account</button>
            </form>
            <h4>Already have an account?</h4>
            <button class="btn btn-secondary" onClick={() => setIsNewUser(false)}>Login</button>
        </div>
    )
}

export default SignUpForm