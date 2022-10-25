import React from 'react'
import HostedPlaydateCard from './HostedPlaydateCard'
import InvitedPlaydateCard from './InvitedPlaydateCard'
import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/Image"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const PlaydateCard = ({ dog }) => {

  return (
    <Container style={{ background: "#F3F8F9", padding: "20px" }}>
      <Image src={dog.profile_pic} roundedCircle height="90px" />

      <h5 className="mb-3"> <b>{dog.name}'s Playdates </b></h5>

      <h6 style={{ color: "#275D69" }}>{dog.name}'s Hosted Playdates:</h6>

      <Row xs={1} md={2} className="g-1" >
        {dog.hosted_playdates.length > 0 ? dog.hosted_playdates.map(playdate => <Col key={playdate.id} sm='1' > <HostedPlaydateCard playdate={playdate} /> </Col>) : <p style={{ padding: "5px" }} ><em> No Hosted Playdates </em></p>}
      </Row>

      <h6 style={{ color: "#275D69" }}>{dog.name}'s Invited Playdates:</h6>

      <Row xs={1} md={2} className="g-1" >
        {dog.requested_playdates.length > 0 ? dog.requested_playdates.map((playdate) => <Col key={playdate.id} sm='1' > <InvitedPlaydateCard key={playdate.id} playdate={playdate} /> </Col>) : <p style={{ padding: "5px" }}><em> No Invited Playdates </em></p>}
      </Row>

      <hr />
    </Container>

  )
}

export default PlaydateCard