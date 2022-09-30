import React from 'react'

const DogCardDisplay = ({dog, onClickEditDog, onClickDeleteDog}) => {

    

  return (
    <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={dog.profile_pic} alt="Dog" width="200" height="200" />
            <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <p className="card-text">{dog.about_me}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Breed: {dog.breed}</li>
            </ul>
            <div className="card-body">
                <a href="#" onClick={onClickEditDog} className="card-link">Edit dog</a>
                <a href="#" onClick={onClickDeleteDog} className="card-link">Delete dog</a>
            </div>
        </div>
  )
}

export default DogCardDisplay