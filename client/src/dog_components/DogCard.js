import React from 'react'

const DogCard = ({dog}) => {
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
        <a href="#" className="card-link">Request play date</a>
    </div>
</div>
  )
}

export default DogCard