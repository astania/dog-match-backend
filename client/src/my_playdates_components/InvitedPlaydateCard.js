import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import InvitedDogCard from './InvitedDogCard'

const InvitedPlaydateCard = ({ playdate }) => {

    // useEffect(() => {
    //     fetch(`/dogs/${dog.id}`).then((response) => {
    //       if (response.ok) {
    //         response.json().then((dogInfo) => setInvitedPlaydates(dogInfo.requested_playdates))
    //       }
    //     });
    //   }, []);

    //   console.log("inv", invitedPlaydates)


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
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            {playdate.invited_dogs.map((dog) => <InvitedDogCard key={dog.id} dog={dog} />)}
                        </div>

                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    )
}

export default InvitedPlaydateCard