import React from 'react'

const DogCard = ({ name, breed, about_me, profile_pic }) => {

    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={profile_pic} alt="Dog" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{about_me}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Breed: {breed}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Edit dog</a>
                <a href="#" className="card-link">Delete dog</a>
            </div>
        </div>
    )
}

export default DogCard