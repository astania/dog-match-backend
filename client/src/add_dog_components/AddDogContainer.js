import React from 'react'
import AddDogForm from './AddDogForm'
import Container from 'react-bootstrap/Container'

const AddDogContainer = ({ user, onAddDog }) => {

  
  return (
    
    <Container>
      <h5 className="mb-3" >Add a Dog!</h5>
      <AddDogForm user={user} onAddDog={onAddDog} />
    </Container>
  )
}

export default AddDogContainer