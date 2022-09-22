import React from 'react'
import { useState } from 'react'

const SignUpForm = ({ username, password, setUsername, setPassword, setNewUser, onLogin }) => {
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordDoesNotMatch, setPasswordDoesNotMatch] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        const user = {
            username,
            password
        }
        
        console.log("user from signup form", user)

        if (password === confirmPassword) {
            setPasswordDoesNotMatch(false)
            console.log("sending fetch")
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
                <label> Username
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label> Password
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label> Confirm Password
                    <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                {passwordDoesNotMatch ? <p>password must match</p> : ""}

                <button type="submit" value="Login">Create Account</button>
            </form>
            <h4>Already have an account?</h4>
            <button onClick={() => setNewUser(false)}>Login</button>
        </div>
    )
}

export default SignUpForm