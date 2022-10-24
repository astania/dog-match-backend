import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DogCard = ({ dog, onAddRequestedDog, onRemoveRequestedDog, requestedDogs }) => {

  const requestedDogIds = requestedDogs.map(dog => dog.id)

  const onAddDog = () => {
    onAddRequestedDog(dog)
  }

  const onRemoveDog = () => {
    onRemoveRequestedDog(dog)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dog.profile_pic} />
      <Card.Body>
        <Card.Title>{dog.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Breed: {dog.breed}</Card.Subtitle>
        <Card.Text>
          {dog.about_me}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        {requestedDogIds.includes(dog.id) ? <Button className="card-link" onClick={() => onRemoveDog()}>remove from playdate request</Button> : <Button className="card-link" onClick={() => onAddDog()}>Add to playdate request form</Button>}
      </Card.Body>
    </Card>
  )
}

export default DogCard