import React from 'react'
import DogCard from './DogCard'

const AllDogsContainer = ({ allDogs, user, onAddRequestedDog, onRemoveRequestedDog, requestedDogs }) => {
  
  const dogsOtherThanUserDogs = allDogs.filter(dog => dog.user_id !== user.id)

  return (
    <div>
      {dogsOtherThanUserDogs.map((dog, index) => <DogCard dog={dog} key={index} onAddRequestedDog={onAddRequestedDog} onRemoveRequestedDog={onRemoveRequestedDog} requestedDogs={requestedDogs}/>)}
    </div>
  )
}

export default AllDogsContainer