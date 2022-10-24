import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import InvitedDogCard from './InvitedDogCard'
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const InvitedPlaydateCard = ({ playdate }) => {


    return (
        <Container>
            <Card style={{ width: '18rem' }} bg="light">
                <Card.Body>
                    <Card.Title>{playdate.date}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{playdate.time}</Card.Subtitle>
                    <Card.Text >
                        <p><b>Hosted by:</b></p>
                        <InvitedDogCard dog={playdate.host_dog} />
                        <br></br>
                        <p><b>Details:</b></p>
                        <p>{playdate.notes}</p>

                        <b>Who Else is Coming:</b>
                        <CardGroup>
                            {/* <div style={{ display: 'flex', flexDirection: 'row' }}> */}
                            <Row xs={1} md={2} className="g-1">
                                {playdate.invited_dogs.map((dog) => <Col sm='1'> <InvitedDogCard key={dog.id} dog={dog} /> </Col>) }
                            </Row>
                            {/* </div> */}
                        </CardGroup>

                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    )
}

export default InvitedPlaydateCard