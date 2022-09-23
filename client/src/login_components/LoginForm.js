import React from 'react'
import { useState } from 'react'

const LoginForm = ({ onLogin, setIsNewUser }) => {
    const [logInInput, setLogInInput] = useState({
        username: "",
        password: ""
    }) 


    function handleSubmit(e) {
        e.preventDefault()


        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ logInInput }),
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
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        
        setLogInInput({
            ...logInInput, [name]: value
        })
    }


    return (
        <div>
            <h4>Log in below:</h4>

            <form onSubmit={handleSubmit}>
                <label> Username
                    <input type="text" name="username" value={logInInput.username} onChange={handleChange} />
                </label>
                <label> Password
                    <input type="text" name="password" value={logInInput.password} onChange={handleChange} />
                </label>

                <button type="submit" value="Login">Login</button>
            </form>
            <h4>Are you new here? Create an account below:</h4>
            <button onClick={() => setIsNewUser(true)}>Create Account</button>

        </div>
    )
}

export default LoginForm