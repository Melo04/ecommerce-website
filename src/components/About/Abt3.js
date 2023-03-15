import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FirstDes = styled.div`
margin-bottom: 200px;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 4.5rem;
flex-direction: row-reverse;

@media screen and (max-width: 850px){
  display: flex;
  flex-direction: column-reverse;
  margin-top: 4rem;
}
`

const DesText = styled.div`
width: 45%;
text-align: start;

h2{
    font-size: 2.5rem;
    padding-bottom: 1rem;
    background: #00c3ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #00c3ff, #ffff1c); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #00c3ff, #ffff1c);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}

p{
    font-size: 1.1rem;
    text-align: justify;
}

@media screen and (max-width: 850px){
  width: 100%;
}
`

const Image = styled.div`
position: relative;
width: 50%;
display: flex;
justify-content: space-between;
z-index: -99;
background-color: #fff;
animation-duration: 10s;

img{
    width: 49%;
    height: 350px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: -1px 1px 62px -18px rgba(0, 0, 0, 0.19);
}

img:nth-child(2){
  position: absolute;
  top: 20%;
  right: 0;
}

@media screen and (max-width: 850px){
  width: 100%;
  margin: 1.8rem 0;
}
`

const Btn = styled(Link)`
display: inline-block;
background-color: #5d26c1;
color: #fff;
outline: none;
border: none;
text-decoration: none;
font-size: 18px;
font-family: 'Nunito', sans-serif;
padding: 0.6rem 1.8rem;
border-radius: 10px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
margin-top: 30px;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #5d26c1;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`

const Abt3 = ({heading, text, img, img2}) => {
  return (
    <FirstDes>
        <DesText>
            <h2>{heading}</h2>
            <p>{text}</p>
            <Btn to="/ecommerce-website/collaboration">Shop Now</Btn>
        </DesText>

        <Image>
        <img src={img} alt=''/>
        <img src={img2} alt=''/>
        </Image>
    </FirstDes>
  )
}

export default Abt3