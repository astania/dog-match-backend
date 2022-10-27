import React from 'react'
import welcomeImage from './frontpageimage.jpg'

const WelcomePage = ({user}) => {
  
  
 

  return (
    <div className="text-center">
      
      <h2 className="text-center">Welcome, {user.first_name}!</h2>
      <p className="text-center" >Go to your profile to add your dogs, or go to the Find Playmates tab to start a playdate request!</p>
      <img src={welcomeImage} alt="Dogs in a park" height="400"></img>
      </div>
  )
}

export default WelcomePage