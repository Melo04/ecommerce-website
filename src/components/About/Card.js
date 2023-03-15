import React from 'react'
import styled from 'styled-components'
import { collab } from '../data'
import { Link } from 'react-router-dom'

const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
min-height: 100vh;
`

const Container = styled.div`
position: relative;
width: 300px;
height: 350px;
margin: 20px;
border-radius: 20px;
transition: 0.5s;
transition-delay: 0.5s;
display: flex;
justify-content: flex-start;
align-items: center;

&:hover{
    width: 600px;
    transition-delay: 0s;
}

@media screen and (max-width: 991px){
  width: auto;
  max-width: 350px;
  align-items: flex-start;

  &:hover{
    height: 600px;
  }
}
`

const Circle = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: 20px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;

&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.color};
    clip-path: circle(120px at center);
    transition: 0.5s;
}

${Container}:hover &::before{
    clip-path: circle(400px at center);
}

img{
    position: relative;
    width: 200px;
    transition: 0.5s;
    transition-delay: 0.5s;

    ${Container}:hover &{
        transform: scale(0);
        transition-delay: 0s;
    }
}
`

const Content = styled.div`
position: relative;
width: 50%;
left: 20%;
padding: 20px 20px 20px 40px;
opacity: 0;
transition: 0.5s;
visibility: hidden;

${Container}:hover &{
    left: 0;
    opacity: 1;
    color: #fff;
    visibility: visible;
    transition-delay: 0.5s;
}

h2{
    text-transform: uppercase;
    font-size: 2em;
    line-height: 1em;
}

p{
    font-size: 0.9em;
    text-align: justify;
}

@media screen and (max-width: 991px){
    ${Container}:hover &{
        width: 100%;
        left: 0;
        padding: 40px;
    }
}
`

const Btn = styled(Link)`
    position: relative;
    color: #111;
    background: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 10px;
    display: inline-block;
    text-decoration: none;
    font-weight: 500;
    transition: 0.5s ease-in-out;

    &:hover{
        border: 2px solid #8C57FF;
        color: #8C57FF;
    }
`

const Pimg = styled.img`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) scale(0);
height: 430px;
transition: 0.5s;
transition-delay: 0s;

${Container}:hover &{
    left: 75%;
    transform: translate(-50%, -50%) scale(1);
    transition-delay: 0.5s;
}

@media screen and (max-width: 991px){
    ${Container}:hover &{
        top: initial;
        bottom: 30px;
        left: 50%;
        transform: translate(-50%, 0%) scale(1);
        height: 300px;
    }
}
`

const Card = () => {
  return (
    <Wrapper>
        {collab.map((item) => {
            const {id, img, logo, color, name, text, textc} = item;
            return(
            <Container key={id}>
                <Circle color={color}>
                    <img src={logo} alt=''/>
                </Circle>
                <Content>
                    <h2>{name}</h2>
                    <p textc={textc}>{text}</p>
                    <Btn to="/ecommerce-website/products">Explore more</Btn>
                </Content>
                <Pimg src={img} alt=''/>
            </Container>
            )
        })}
     </Wrapper>
  )
}

export default Card