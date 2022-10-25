import { React, useState } from 'react'
import DogCardDisplay from './DogCardDisplay'
import DogEditForm from './DogEditForm'

const DogCard = ({ dog, onEditDog, onDeleteDog }) => {

    const [editDog, setEditDog] = useState(false)

    const onClickEditDog = (e) => {
        e.preventDefault()
        setEditDog(true)
    }
    const onClickDeleteDog = (e) => {
        e.preventDefault()
        fetch(`/dogs/${dog.id}`, {
            method: "DELETE",
        }).then(() => onDeleteDog(dog.id))

    }


    return (
        <div>
            {editDog ? <DogEditForm dog={dog} onEditDog={onEditDog} setEditDog={setEditDog}/> : <DogCardDisplay dog={dog} onClickEditDog={onClickEditDog} onClickDeleteDog={onClickDeleteDog} />}
        </div>
    )
}

export default DogCard