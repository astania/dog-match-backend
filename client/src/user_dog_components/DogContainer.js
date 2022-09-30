import React from 'react'
import DogCard from './DogCard'

const DogContainer = ({ dogs, onEditDog }) => {

    return (
        <div>
            {dogs.map((dog, index) => <DogCard dog={dog} key={index} onEditDog={onEditDog} />)}
        </div>
    )
}

export default DogContainer