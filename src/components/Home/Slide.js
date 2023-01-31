import React, { useState } from 'react'
import styled from 'styled-components'
import {AiOutlineCaretLeft, AiOutlineCaretRight} from 'react-icons/ai'
import { sliderData } from '../data';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.9;
    z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
  padding-right: 50px;
  font-family: 'Rubik', sans-serif;
  color: #fff;

  @media screen and (max-width: 1000px){
    font-size: 45px;
  }
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
  padding-right: 20px;
  font-family: 'Rubik', sans-serif;
  color: #964B00;

  @media screen and (max-width: 1000px){
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
`;

const Btn = styled(Link)`
display: inline-block;
background-color: #964B00;
color: #fff;
outline: none;
border: none;
font-size: 16px;
text-decoration: none;
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

&:hover{
    transform: scale(0.9);
}
&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #964B00;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0? slideIndex - 1 : 3)
        }else{
            setSlideIndex(slideIndex < 3? slideIndex + 1: 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <AiOutlineCaretLeft/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderData.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                    <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <ButtonContainer>
                        <Btn to="/collaboration">Explore Now</Btn>
                    </ButtonContainer>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <AiOutlineCaretRight/>
        </Arrow>
    </Container>
  );
}

export default Slider