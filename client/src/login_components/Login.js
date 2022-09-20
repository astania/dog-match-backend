import React from 'react'
import { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const [newUser, setNewUser] = useState(false)

    console.log("frontend username:", username)

    
  return (
    <div>
        <h2>Welcome to Dog Match! </h2>
        {newUser ? <SignUpForm username={username} setUsername={setUsername} password={password} setPassword={setPassword} onLogin={onLogin} setNewUser={setNewUser}/> 
        : <LoginForm username={username} setUsername={setUsername} password={password} setPassword={setPassword} onLogin={onLogin} setNewUser={setNewUser}/> }
        
        
    </div>
    

  )
}

export default Login