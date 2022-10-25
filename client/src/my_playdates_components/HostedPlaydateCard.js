import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
// import CardHeader from 'react-bootstrap/esm/CardHeader'
import InvitedDogCard from './InvitedDogCard'
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
                            <br></br>
                            <b>Who Else is Coming:</b>
                            <br></br>
                        </div>
                        {/* <div style={{ display: 'flex', flexDirection: 'row' }}> */}
                        <CardGroup>
                            <Row xs={1} md={2} className="g-1">
                                {/* {playdate.invited_dogs.map(dog => <Col sm='1' key={dog.id} > <InvitedDogCard dog={dog} /> </Col>)} */}
                            </Row>
                        </CardGroup>
                        {/* </div> */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default HostedPlaydateCard