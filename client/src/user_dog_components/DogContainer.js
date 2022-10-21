import React from 'react'
import DogCard from './DogCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const DogContainer = ({ dogs, onEditDog, onDeleteDog }) => {

    return (
        <Row xs={1} md={2} className="g-4">
            {dogs.map((dog, index) => <Col sm='6' key={dog.id} ><DogCard dog={dog} key={index} onEditDog={onEditDog} onDeleteDog={onDeleteDog} /> </Col>)}
        </Row>
    )
}

export default DogContainer