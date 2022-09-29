import React from 'react'
import DogCard from './DogCard'

const AllDogsContainer = ({ allDogs }) => {
  
  return (

    <div>
      {allDogs.map(dog => <DogCard dog={dog} key={dog.id}/>)}
    </div>
  )
}

export default AllDogsContainer