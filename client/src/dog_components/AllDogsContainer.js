import React from 'react'
import DogCard from './DogCard'

const AllDogsContainer = ({ allDogs }) => {
  console.log(allDogs)
  return (

    <div>
      {allDogs.map((dog, index) => <DogCard dog={dog} key={index}/>)}
      
    </div>
  )
}

export default AllDogsContainer