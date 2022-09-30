import { React, useState } from 'react'
import DogCardDisplay from './DogCardDisplay'
import DogEditForm from './DogEditForm'

const DogCard = ({ dog, onEditDog }) => {

    const [editDog, setEditDog] = useState(false)

    const onClickEditDog = (e) => {
        e.preventDefault()
        setEditDog(true)
        console.log(editDog)
    }

    const onDeleteDog = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    return (
        <div>
            {editDog ? <DogEditForm dog={dog} onEditDog={onEditDog} setEditDog={setEditDog}/> : <DogCardDisplay dog={dog} onClickEditDog={onClickEditDog} onDeleteDog={onDeleteDog} />}
        </div>
    )
}

export default DogCard