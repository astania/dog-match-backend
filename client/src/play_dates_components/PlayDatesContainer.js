import { React, useState } from 'react'
import MiniDogCard from './MiniDogCard'

const PlayDatesContainer = ({ user, requestedDogs, setRequestedDogs, onRemoveRequestedDog }) => {

  const blankPlaydateInput = {
    date: "",
    time: "",
    notes: "",
    dog_id: ""
  }

  const userDogs = user.dogs

  return (
    <div>
      <form>
        <h5>Request a playdate!</h5>
        <div className="form-group">
          <label> Which dog do you want to create the playdate for?
            <select className="form-select" defaultValue="">
              <option value="" disabled>Select your dog</option>
              {userDogs.map(dog => <option key={dog.id} value={dog.id}>{dog.name}</option>)}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>Playdate Date
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="November 19" />
          </label>
          <label>Playdate Time
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="3:30pm" />
          </label>
        </div>
        {requestedDogs.length > 0 ? <label>Requested Dogs
          {requestedDogs.map((dog, index) => <MiniDogCard dog={dog} key={dog.id} index={index} onRemoveRequestedDog={onRemoveRequestedDog}/>)}
        </label> : <em> Go to the Dogs tab to add some playmates!</em>}

        <div className="form-group">
          <label >Notes:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Describe what you would like to do! Any likes/dislikes?"></textarea>
        </div>
        <button type="submit">Request Playdate!</button>
      </form>

    </div>
  )
}

export default PlayDatesContainer