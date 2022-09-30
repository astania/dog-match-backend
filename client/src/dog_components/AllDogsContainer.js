import React from 'react'
import DogCard from './DogCard'

const AllDogsContainer = ({ allDogs, user }) => {
  console.log(allDogs)

  const dogsOtherThanUserDogs = allDogs.filter(dog => dog.user_id !== user.id)

  console.log("Other dogs", dogsOtherThanUserDogs)

  return (

    <div>
      {dogsOtherThanUserDogs.map((dog, index) => <DogCard dog={dog} key={index}/>)}
      
    </div>
  )
}

export default AllDogsContainer