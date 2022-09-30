import React from 'react'
import DogCard from './DogCard'

const AllDogsContainer = ({ allDogs, user }) => {
  
  const dogsOtherThanUserDogs = allDogs.filter(dog => dog.user_id !== user.id)

  return (

    <div>
      {dogsOtherThanUserDogs.map((dog, index) => <DogCard dog={dog} key={index}/>)}
    </div>
  )
}

export default AllDogsContainer