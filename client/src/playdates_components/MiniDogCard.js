import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const MiniDogCard = ({ dog, index, onRemoveRequestedDog }) => {

    const onRemoveDog = () => {
        onRemoveRequestedDog(dog)
    }

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Playmate #{index + 1}</Card.Title>
                    <Card.Img variant="top" src={dog.profile_pic} alt="dog" height="250rem" />
                    <Card.Text>
                        <b>{dog.name} the {dog.breed}</b>
                        <br />
                        {dog.about_me}
                    </Card.Text>
                    <Card.Link onClick={() => onRemoveDog()} >Remove</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default MiniDogCard