import {React, useState} from 'react'
import PlaydateCard from './PlaydateCard'
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

const MyPlaydatesContainer = ({ user }) => {

  const userDogs = user.dogs
  
  return (
    <Container>
      {userDogs.length > 1 ? <h2 style={{ color: "#275D69" }}>My Dogs' Playdates</h2> : <h2 style={{ color: "#275D69" }}>My Dog's Playdates</h2>}
      
      {userDogs.map(dog => <PlaydateCard key={dog.id} dog={dog} />)}

    </Container>
  )
}

export default MyPlaydatesContainer