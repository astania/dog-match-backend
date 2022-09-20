import React from 'react'
import { useState } from 'react'

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("")
    console.log("frontend username:", username)

    function handleSubmit(e){
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
        <h2>Login to </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    </div>
    

  )
}

export default Login