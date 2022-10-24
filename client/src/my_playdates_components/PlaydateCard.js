import React from 'react'
import HostedPlaydateCard from './HostedPlaydateCard'
import InvitedPlaydateCard from './InvitedPlaydateCard'
import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/Image"

const PlaydateCard = ({ dog }) => {
 
  return (
    <Container style={{ background: "#F3F8F9", padding: "20px" }}>
      <Image src={dog.profile_pic} roundedCircle height="90px" />
      <h5 className="mb-3"> <b>{dog.name}'s Playdates </b></h5>
      <h6 style={{ color: "#275D69" }}>{dog.name}'s Hosted Playdates:</h6>
      <br />
      <div style={{ display: 'flex', flexDirection: 'row' }} className="mb-3">
        {dog.hosted_playdates.length > 0 ? dog.hosted_playdates.map(playdate => <HostedPlaydateCard key={playdate.id} playdate={playdate} />) : <p style={{ padding: "5px" }} ><em> No Hosted Playdates </em></p>}
      </div>
      <h6 style={{ color: "#275D69" }}>{dog.name}'s Invited Playdates:</h6>
      <br />
      <div style={{ display: 'flex', flexDirection: 'row' }} >
        {dog.requested_playdates.length > 0 ? dog.requested_playdates.map((playdate, index) => <InvitedPlaydateCard key={index} playdate={playdate} />) : <p style={{ padding: "5px" }}><em> No Invited Playdates </em></p>}
      </div>
      <hr />
    </Container>

  )
}

export default PlaydateCard