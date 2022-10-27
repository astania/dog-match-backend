import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';

const InvitedDogCard = ({ dog }) => {
    // console.log("dog", dog)

    // console.log("profile pic",dog.profile_pic)
    
    return (
        <Container>
            <Card style={{ width: '5rem' }}>
            <Card.Img variant="top" src={dog.profile_pic} alt="dog" />
            <Card.Title>{dog.name}</Card.Title>
            </Card>
        </Container>
    )
}

export default InvitedDogCard