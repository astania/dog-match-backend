import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';

const InvitedDogCard = ({ dog }) => {
    return (
        <Container>
            <Card style={{ width: '5rem' }}>
            <Card.Img variant="top" src={dog.profile_pic} />
            <Card.Title>{dog.name}</Card.Title>
            </Card>
        </Container>
    )
}

export default InvitedDogCard