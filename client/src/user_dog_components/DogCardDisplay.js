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
    
    // <div className="card" style={{ width: '18rem' }}>
    //         <img className="card-img-top" src={dog.profile_pic} alt="Dog" height="200" />
    //         <div className="card-body">
    //             <h5 className="card-title">{dog.name}</h5>
    //             <p className="card-text">{dog.about_me}</p>
    //         </div>
    //         <ul className="list-group list-group-flush">
    //             <li className="list-group-item">Breed: {dog.breed}</li>
    //         </ul>
    //         <div className="card-body">
    //             <a href="#" onClick={onClickEditDog} className="card-link">Edit dog</a>
    //             <a href="#" onClick={onClickDeleteDog} className="card-link">Delete dog</a>
    //         </div>
    //     </div>
        
  )
}

export default DogCardDisplay