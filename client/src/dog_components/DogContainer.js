import React from 'react'
import DogCard from './DogCard'

const DogContainer = ({dogs}) => {
    
  return (
    <div>
    {dogs.map((dog, index) => <DogCard  name={dog.name} breed={dog.breed} about_me={dog.about_me} profile_pic={dog.profile_pic} key={index} />)}
    </div>
  )
}

export default DogContainer