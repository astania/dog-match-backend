import React from 'react'
import NavBar from '../navigation_components/NavBar'

const WelcomePage = ({user}) => {
  
  
 

  return (
    <div>
      <NavBar />
      <h2>Welcome, {user.username}!</h2>
      
      </div>
  )
}

export default WelcomePage