import React from 'react'
import PlaydateCard from './PlaydateCard'
import Container from 'react-bootstrap/Container';


const MyPlaydatesContainer = ({ user }) => {

  const userDogs = user.dogs

  return (

    <Container>
      {userDogs.length > 1 ? <h2 style={{ color: "#275D69" }} className="mb-5">My Dogs' Playdates</h2> : <h2 style={{ color: "#275D69" }} className="mb-5">My Dog's Playdates</h2>}
      {userDogs.length == 0 ? <h5 className="mb-5">Add your dogs in the "add dogs" tab!</h5> : null}
      {userDogs.map(dog => <PlaydateCard key={dog.id} dog={dog} />)}

    </Container>
  )
}

export default MyPlaydatesContainer