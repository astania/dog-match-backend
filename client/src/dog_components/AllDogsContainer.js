import React from 'react'
import DogCard from './DogCard'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AllDogsContainer = ({ allDogs, user, onAddRequestedDog, onRemoveRequestedDog, requestedDogs }) => {
  
  const dogsOtherThanUserDogs = allDogs.filter(dog => dog.user_id !== user.id)

  return (
    <Row xs={1} md={3} className="g-4">
      {dogsOtherThanUserDogs.map((dog, index) => <Col sm='6' key={index}> <DogCard dog={dog} key={index} onAddRequestedDog={onAddRequestedDog} onRemoveRequestedDog={onRemoveRequestedDog} requestedDogs={requestedDogs}/> </Col> )}
    </Row>
  )
}

export default AllDogsContainer

