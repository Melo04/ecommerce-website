import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background: #fff;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
width: 85%;
min-height: 90vh;
border-radius: 50px;
margin: 0 auto;
background: #59c173; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #59c173, #a17fe0, #5d26c1); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #59c173, #a17fe0, #5d26c1);
color: #fff;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 1000px){
    min-height: 1000px;
}
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width: 800px){
  width: 60%;
}
`

const Btn = styled(Link)`
display: inline-block;
background-color: #fff;
color: #5d26c1;
outline: none;
border: none;
text-decoration: none;
font-size: 18px;
font-family: 'Nunito', sans-serif;
padding: 0.6rem 2rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
margin-top: 10px;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #fff;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`

const Title = styled.h2`
font-size: 40px;
text-transform: capitalize;
color: #fff;
align-self: flex-start;
width: 80%;
margin: 0 auto;
margin-top: 30px;
font-family: 'Nunito', sans-serif;
`;

const SubText = styled.p`
font-size: 18px;
color: #fff;
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
text-align: justify;
`

const SubTextLight = styled.p`
font-size: 18px;
color: 	#fff;
align-self: flex-start;
text-align: justify;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`

const Phone = () => {
  return (
    <Section>
      <Container>
            <Box><Carousel/></Box>  
            <Box>
            <Title>Welcome to the CASETIFY family</Title>
            <SubText>
              After almost 7 years in the making, we hit the refresh button.
              What started as a simple idea--to make your Instagram photos into custom phone cases--has now turned into the ultimate case maker for everyone with self-expression at our core from the start.
              People evolve, so did we. With our new look, you can expect the same high quality cases that are built to be dropped. We've got you covered.
              Keep scrolling for more.
            </SubText>
            <SubTextLight>
              We're big believers in self-expression, so we wanted to embody just that for the dreamers and playmakers who settle for nothing less than the best for their phone cases!
            </SubTextLight>
            <Btn to="/about">Explore Now</Btn>
            </Box>
      </Container>
    </Section>
  )
}

export default Phone