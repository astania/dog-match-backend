import React from 'react'
import { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const Login = ({ onLogin, user, setUser, errors, setErrors }) => {

    const [isNewUser, setIsNewUser] = useState(false)
    
    
  return (
    <div>
        <h2>Welcome to Dog Match! </h2>
        {!!isNewUser ? <SignUpForm onLogin={onLogin} setIsNewUser={setIsNewUser}/> 
        : <LoginForm user={user} setUser={setUser} onLogin={onLogin} setIsNewUser={setIsNewUser} errors={errors} setErrors={setErrors}/> }
        
    </div>
  
  )
}

export default Login