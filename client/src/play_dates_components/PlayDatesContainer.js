import { React, useState } from 'react'
import MiniDogCard from './MiniDogCard'

const PlayDatesContainer = ({ user, requestedDogs, onRemoveRequestedDog }) => {
  const requestedDogIds = requestedDogs.map(dog => dog.id)
  const blankPlaydateInput = {
    date: "",
    time: "",
    notes: "",
    dog_id: "",
    requested_dogs: requestedDogIds
  }

  const [playdateRequest, setPlaydateRequest] = useState(blankPlaydateInput)

  // console.log("playdate request input", playdateRequestedDogsInput)

  const userDogs = user.dogs

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setPlaydateRequest({
      ...playdateRequest, [name]: value
    })
  }

  const sendPlaydateRequest = (e) => {
    e.preventDefault()
    fetch("/playdates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playdateRequest),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(playdateInfo => console.log(playdateInfo))
        }
      })
  }


  return (
    <div>
      <form onSubmit={sendPlaydateRequest}>
        <h5>Request a playdate!</h5>
        <div className="form-group">
          <label> Which dog do you want to create the playdate for?
            <select className="form-select" name="dog_id" defaultValue="" onChange={handleChange}>
              <option value="" disabled>Select your dog</option>
              {userDogs.map(dog => <option key={dog.id} value={dog.id}>{dog.name}</option>)}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>Playdate Date
            <input type="text" className="form-control" name="date" value={playdateRequest.date} onChange={handleChange} placeholder="November 19" />
          </label>
          <label>Playdate Time
            <input type="text" className="form-control" name="time" value={playdateRequest.time} onChange={handleChange} placeholder="3:30pm" />
          </label>
        </div>
        {requestedDogs.length > 0 ? <label>Requested Dogs
          {requestedDogs.map((dog, index) => <MiniDogCard dog={dog} key={dog.id} index={index} onRemoveRequestedDog={onRemoveRequestedDog} />)}
        </label> : <em> Go to the Dogs tab to add some playmates!</em>}

        <div className="form-group">
          <label >Notes:</label>
          <textarea className="form-control" name="notes" value={playdateRequest.notes} onChange={handleChange} rows="3" placeholder="Describe what you would like to do! Any likes/dislikes?"></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Request Playdate!</button>
      </form>

    </div>
  )
}

export default PlayDatesContainer















  

  //add playdate ID for PDRD after the playdate is created
  // const playdateRequestedDogsInput = requestedDogs.map(dog => ({ playdate_id: playdateId, dog_id: dog.id }))

  // console.log(playdateRequestedDogsInput)
// const [playdateId, setPlaydateId] = useState("")
 //send POST request for each PDRD  
  //  const sendPDRD = () => {
  //   playdateRequestedDogsInput.forEach(input => {
  //     fetch("/playdate_requested_dogs", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(input),
  //     }).then(res => res.json()).then(info => console.log(info))
  //   })
  // }
  