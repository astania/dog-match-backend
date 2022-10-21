import React from 'react'
import DogCard from './DogCard'

const DogContainer = ({ dogs, onEditDog, onDeleteDog }) => {

    return (
        <div className="card-deck">
            {dogs.map((dog, index) => <DogCard dog={dog} key={index} onEditDog={onEditDog} onDeleteDog={onDeleteDog} />)}
        </div>
    )
}

export default DogContainer