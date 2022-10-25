import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const DogCardDisplay = ({dog, onClickEditDog, onClickDeleteDog}) => {

    

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={dog.profile_pic} alt="dog" height="250rem" />
    <Card.Body>
      <Card.Title>{dog.name}</Card.Title>
      <Card.Text>
        <b>Breed: {dog.breed}</b>
        <br/>
        {dog.about_me}
      </Card.Text>
      <Button onClick={onClickEditDog} variant="primary">Edit dog</Button>
      <Button onClick={onClickDeleteDog} variant="secondary">Delete dog</Button>
    </Card.Body>
  </Card>
        
  )
}

export default DogCardDisplay