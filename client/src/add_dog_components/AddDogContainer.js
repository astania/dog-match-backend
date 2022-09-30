import React from 'react'
import AddDogForm from './AddDogForm'

const AddDogContainer = ({user, onAddDog}) => {
  return (
    <div><AddDogForm user={user} onAddDog={onAddDog}/> </div>
  )
}

export default AddDogContainer