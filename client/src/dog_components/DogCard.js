import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const DogCard = ({dog, onAddRequestedDog, onRemoveRequestedDog, requestedDogs}) => {

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
    {requestedDogIds.includes(dog.id) ? <Button href="#" className="card-link" onClick={() => onRemoveDog()}>remove from playdate request</Button> : <Button href="#" className="card-link" onClick={() => onAddDog()}>Add to playdate request form</Button>}
      {/* <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link> */}
    </Card.Body>
  </Card>

//     <div className="card" style={{ width: '18rem' }}>
//     <img className="card-img-top" src={dog.profile_pic} alt="Dog" width="200" />
//     <div className="card-body">
//         <h5 className="card-title">{dog.name}</h5>
//         <p className="card-text">{dog.about_me}</p>
//     </div>
//     <ul className="list-group list-group-flush">
//         <li className="list-group-item">Breed: {dog.breed}</li>
//     </ul>
//     <div className="card-body">
//         {requestedDogIds.includes(dog.id) ? <a href="#" className="card-link" onClick={() => onRemoveDog()}>remove from playdate request form</a> : <a href="#" className="card-link" onClick={() => onAddDog()}>Add to playdate request form</a>}
//     </div>
// </div>
  )
}

export default DogCard