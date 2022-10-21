import React from 'react'
import HostedPlaydateCard from './HostedPlaydateCard';

const PlaydateCard = ({ dog }) => {
  console.log("dog:", dog)
  return (
    <div>
      <h5>{dog.name}'s Playdates</h5>
      <h6>Hosted Playdates</h6>
      {dog.hosted_playdates.map(playdate => <HostedPlaydateCard playdate={playdate}/> )}

      <h6>Invited Playdates</h6>
    </div>

  )
}

export default PlaydateCard