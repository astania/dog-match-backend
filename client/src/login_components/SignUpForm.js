import React from 'react'
import { useState } from 'react'

const SignUpForm = ({ username, password, setUsername, setPassword, setNewUser, onLogin}) => {
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordConfirmed, setPasswordConfirmed] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        const user = {
            username,
            password
        }
        if (passwordConfirmed){
            fetch("/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
                .then(r => r.json())
                .then(userInfo => onLogin(userInfo))
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
                {password === confirmPassword ? () => setPasswordConfirmed(true) : <p>password must match</p>}

                <button type="submit" value="Login">Create Account</button>
            </form>
            <h4>Already have an account?</h4>
            <button onClick={() => setNewUser(false)}>Login</button>

        </div>
    )
}

export default SignUpForm