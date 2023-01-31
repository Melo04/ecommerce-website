import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const Title = styled.h2`
font-size: 40px;
text-transform: capitalize;
width: 70%;
color: #000000;
align-self: flex-start;
font-family: 'Nunito', sans-serif;

span{
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
}

.text-1{
    color: red;
}
.text-2{
    color: orange;
}
.text-3{
    color: blue;
}
.text-4{
    color: green;
}
.text-5{
    color: purple;
}
.text-6{
    color: red;
}
.text-7{
    color: yellow;
}
.trendy{
background: #00f260; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #00f260, #0575e6); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #00f260, #0575e6);
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;
}
@media (max-width: 70em){
    font-size: 30px;
}
@media (max-width: 60em){
    align-self: center;
    text-align: center;
    margin-bottom: 80px;
}
@media (max-width: 40em){
    width: 90%;
}
`;

const Subtitle = styled.h3`
font-size: 20px;
text-transform: capitalize;
color: #000000;
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;
font-family: 'Nunito', sans-serif;

@media (max-width: 40em){
    font-size: 20px;
}
@media (max-width: 60em){
    align-self: center;
    text-align: center;
}
`;

const Btn = styled(Link)`
display: inline-block;
background-color: #000000;
color: #fff;
text-decoration: none;
outline: none;
border: none;
font-size: 16px;
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
margin-left: -250px;

&:hover{
    color: #fff;
    transform: scale(0.9);
}
&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #000000;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

@media (max-width: 60em){
    display: block;
    margin-left: auto;
    margin-right: auto;
}
`

const TypeWriterText = () => {
  return (
    <>
    <Title>
        Get your phone dressed up with our <span class="trendy">TRENDY</span> collections
        <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
        onInit={(typewriter) => {
            typewriter.typeString('<span class="text-1">Stranger Things.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2">One Piece.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-3">Kakao Friends.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-4">Harry Potter.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-5">BTS.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-6">Squid Game.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-7">Minions.</span>')
            .pauseFor(2000)
            .deleteAll()
            .start()
        }}
        />  
    </Title>
    <Subtitle>Keep your phone stylish with <br></br> our best selling prints.</Subtitle>
    <Btn to='/'>Explore more</Btn>
    </>
  )
}

export default TypeWriterText