import React from 'react'
import { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const Login = ({ onLogin, user, setUser }) => {

    const [isNewUser, setIsNewUser] = useState(false)
    
    
  return (
    <div>
        <h2>Welcome to Dog Match! </h2>
        {!!isNewUser ? <SignUpForm onLogin={onLogin} setIsNewUser={setIsNewUser}/> 
        : <LoginForm user={user} setUser={setUser} onLogin={onLogin} setIsNewUser={setIsNewUser}/> }
        
    </div>
  
  )
}

export default Login