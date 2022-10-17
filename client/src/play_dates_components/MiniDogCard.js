import React from 'react'

const MiniDogCard = ({dog, index, onRemoveRequestedDog}) => {

    const onRemoveDog = () => {
        onRemoveRequestedDog(dog)
      }
      
    return (
    <div className="card" style={{width: 200}}>
            <h5>Playmate #{index + 1}</h5>
            <img src={dog.profile_pic} className="card-img-top" alt="dog profile" height="100"/>
                <div className="card-body">
                    <p className="card-text"><b>{dog.name} the {dog.breed}</b> <br />{dog.about_me} </p>
                    <a href="#" onClick={() => onRemoveDog()} className="card-link">Remove</a>
                </div>
        </div>
    )
}

export default MiniDogCard