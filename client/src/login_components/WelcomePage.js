import React from 'react'

const WelcomePage = ({user}) => {
  return (
    <div>Welcome, {user.username}!</div>
  )
}

export default WelcomePage