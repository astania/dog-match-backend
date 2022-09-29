import React from 'react'

const WelcomePage = ({user}) => {
  
  
 

  return (
    <div>
      
      <h2>Welcome, {user.first_name}!</h2>
      <p>Go to your profile to add your dogs, or go to the Dogs tab to see the dogs</p>
      </div>
  )
}

export default WelcomePage