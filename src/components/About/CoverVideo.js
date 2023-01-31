import React from 'react'
import styled from 'styled-components'
import GIF from "./phone.mp4"

const VideoContainer = styled.div`
width: 80%;

video{
    margin-left: -40%;
    width: 200%;
    height: auto;
}

@media (max-width: 64em){
  margin-left: -20%;
  min-width: 35vh;
  width: 50%;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <video src={GIF} type="video/mp4" autoPlay muted loop/>
    </VideoContainer>
  )
}

export default CoverVideo