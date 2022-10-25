import { React, useState } from 'react'
import MiniDogCard from './MiniDogCard'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const PlaydatesContainer = ({ user, requestedDogs, setRequestedDogs, onRemoveRequestedDog, onRequestPlaydate }) => {
  const requestedDogIds = requestedDogs.map(dog => dog.id)
  const blankPlaydateInput = {
    date: "",
    time: "",
    notes: "",
    dog_id: "",
    requested_dogs: requestedDogIds
  }

  const [playdateRequest, setPlaydateRequest] = useState(blankPlaydateInput)
  const [errors, setErrors] = useState([])

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
          res.json().then(playdateInfo => onRequestPlaydate(playdateInfo))
            .then(setPlaydateRequest(blankPlaydateInput))
            .then(setRequestedDogs([]))
            .then(setErrors([]))
        } else {
          res.json().then((errorData) => setErrors(errorData.errors))
        }
      })
  }


  return (
    <Container>
      <div className="mb-5">
        <form onSubmit={sendPlaydateRequest} className="text-center">

          <h5>Request a playdate!</h5>

          <div className="form-group mb-2">
            <label> Who is hosting the playdate?
              <select className="form-select" name="dog_id" defaultValue="" onChange={handleChange}>
                <option value="" disabled>Select your dog</option>
                {userDogs.map(dog => <option key={dog.id} value={dog.id}>{dog.name}</option>)}
              </select>
            </label>
          </div>

          <div className="form-group mb-2">
            <label>Playdate Date
              <input type="text" className="form-control mb-2" name="date" value={playdateRequest.date} onChange={handleChange} placeholder="November 19" />
            </label>
            <label>Playdate Time
              <input type="text" className="form-control mb-2" name="time" value={playdateRequest.time} onChange={handleChange} placeholder="3:30pm" />
            </label>
          </div>

          {requestedDogs.length > 0 ?
            <label>Requested Dogs:
              <Row xs={1} md={2} className="g-3">
                {requestedDogs.map((dog, index) => <Col sm='3' key={dog.id} ><MiniDogCard dog={dog} index={index} onRemoveRequestedDog={onRemoveRequestedDog} /></Col>)}
              </Row>
            </label>
            : <b className="mb-2" style={{ color: "blue" }}><em> Go to the Dogs tab to add some playmates!</em></b>}

          <div className="form-group">
            <label >Notes:</label>
            <textarea className="form-control mb-2" name="notes" value={playdateRequest.notes} onChange={handleChange} rows="3" placeholder="Describe what you would like to do! Any likes/dislikes?"></textarea>
          </div>

          <button className="btn btn-primary" type="submit">Request Playdate!</button>

        </form>
        {errors.length > 0 ?
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}> {error} </li>
            ))}
          </ul>
          : ""}

      </div>

    </Container>
  )
}

export default PlaydatesContainer
