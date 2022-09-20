import React from 'react'

const SignUpForm = ({ username, password, setUsername, setPassword, setNewUser, onLogin}) => {

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        })
            .then(r => r.json())
            .then(userInfo => onLogin(userInfo))
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

                <button type="submit" value="Login">Login</button>
            </form>
            <h4>Already have an account?</h4>
            <button onClick={() => setNewUser(false)}>Login</button>

        </div>
    )
}

export default SignUpForm