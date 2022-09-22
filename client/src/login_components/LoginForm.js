import React from 'react'

const LoginForm = ({ username, setUsername, password, setPassword, onLogin, setNewUser }) => {

    function handleSubmit(e) {
        e.preventDefault()

        const user = {
            username,
            password
        }

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user }),
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


    return (
        <div>
            <h4>Log in below:</h4>

            <form onSubmit={handleSubmit}>
                <label> Username
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label> Password
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>

                <button type="submit" value="Login">Login</button>
            </form>
            <h4>Are you new here? Create an account below:</h4>
            <button onClick={() => setNewUser(true)}>Create Account</button>

        </div>
    )
}

export default LoginForm