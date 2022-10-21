import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';

const HostedPlaydateCard = ({ playdate }) => {
    console.log("playdate", playdate)
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{playdate.date}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{playdate.time}</Card.Subtitle>
                    <Card.Text >
                        <b>Details:</b>
                        <br></br>
                        {playdate.notes}
                        <br></br>
                        <b>Who Else is Coming:</b>

                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default HostedPlaydateCard