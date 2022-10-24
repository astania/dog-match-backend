import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import InvitedDogCard from './InvitedDogCard'

const HostedPlaydateCard = ({ playdate }) => {
    return (
        <Container>
            <Card style={{ width: '18rem' }} bg="light">
                <Card.Body>
                    <Card.Title>{playdate.date}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{playdate.time}</Card.Subtitle>
                    <Card.Text >
                        <div>
                            <b>Details:</b>
                            <br></br>
                            {playdate.notes}
                            <b>Who Else is Coming:</b>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            {playdate.invited_dogs.map(dog => <InvitedDogCard key={dog.id} dog={dog} />)}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default HostedPlaydateCard