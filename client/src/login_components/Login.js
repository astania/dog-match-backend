import React from 'react'
import { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const Login = ({ onLogin, user }) => {
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const [isNewUser, setIsNewUser] = useState(false)

    
  return (
    <div>
        <h2>Welcome to Dog Match! </h2>
        {isNewUser ? <SignUpForm onLogin={onLogin} setIsNewUser={setIsNewUser}/> 
        : <LoginForm user={user} onLogin={onLogin} setIsNewUser={setIsNewUser}/> }
        
        
    </div>
    

  )
}

export default Login