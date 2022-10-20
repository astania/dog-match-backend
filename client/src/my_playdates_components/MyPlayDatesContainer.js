import React from 'react'

const MyPlayDatesContainer = ({user}) => {

    const userDogs = user.dogs
    console.log(userDogs)
    
    const printDogs = (userDogs) => {
        userDogs.forEach(dog => console.log(dog.hosted_playdates))
    }

    
  return (
    <div>
        <h2>Playdates</h2>


    </div>
  )
}

export default MyPlayDatesContainer