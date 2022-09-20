import React from 'react'

const WelcomePage = ({user, onLogout}) => {
  
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout())
  }
 

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <button onClick={handleLogout}>Logout</button>
      
      </div>
  )
}

export default WelcomePage