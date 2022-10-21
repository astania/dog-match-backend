import React from 'react'
import PlaydateCard from './PlaydateCard'

const MyPlaydatesContainer = ({user}) => {


    console.log("user", user)

    const userDogs = user.dogs

    
  return (
    <div>
        <h2>My Dogs' Playdates</h2>
        {userDogs.map(dog => <PlaydateCard dog={dog} />)}
        

    </div>
  )
}

export default MyPlaydatesContainer