import React from 'react'

const DogCard = ({dog, onAddRequestedDog, onRemoveRequestedDog, requestedDogs}) => {
  // const [isRequested, setIsRequested] = useState(false)

  const requestedDogIds = requestedDogs.map(dog => dog.id)
  
  const onAddDog = () => {
    onAddRequestedDog(dog)
  }

  const onRemoveDog = () => {
    onRemoveRequestedDog(dog)
  }
  
  // const playDateRequest = {
  //   requested_dog_id: dog.id,
  //   dogId: 1,
  //   playDateId: 1
  // }

  // const requestPlayDate = (e) => {
  //   e.preventDefault()
  //   fetch("/play_date", {
  //       method: "POST",
  //       headers: {
  //           "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(playDateRequest),
  //   })
  //       .then(res => {
  //           if (res.ok) {
  //               res.json().then(dogInfo => console.log(dogInfo))
  //           }
  //       })
  // }
  return (
    <div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src={dog.profile_pic} alt="Dog" width="200" />
    <div className="card-body">
        <h5 className="card-title">{dog.name}</h5>
        <p className="card-text">{dog.about_me}</p>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Breed: {dog.breed}</li>
    </ul>
    <div className="card-body">
        {requestedDogIds.includes(dog.id) ? <a href="#" className="card-link" onClick={() => onRemoveDog()}>remove from playdate request form</a> : <a href="#" className="card-link" onClick={() => onAddDog()}>Add to playdate request form</a>}
    </div>
</div>
  )
}

export default DogCard