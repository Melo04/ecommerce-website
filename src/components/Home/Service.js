import React from 'react'
import Svgone from "../../img/svg1.svg"
import Svgtwo from "../../img/svg2.svg"
import Svgthree from "../../img/svg3.svg"
import styled from "styled-components"
import {Link} from 'react-router-dom';

const Section = styled.section`
background: #fff;
padding-top: 80px;
padding-bottom: 80px;
`;

const H1 = styled.h1`
font-size: 2.5rem;
color: #fff;
text-align: center;
font-weight: 400;
letter-spacing: 5px;
text-transform: uppercase;
font-family: "Nunito", sans-serif;
`;

const Services = styled.div`
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const Service1 = styled.div`
width: 320px;
background: #7f00ff;
padding: 15px;
margin: 35px;
border-radius: 10px;

&:hover{
  cursor: pointer;
}

.shape-1,
.shape-2,
.shape-3,
.shape-4,
.shape-5,
.shape-6{
    width: 20px;
    height: 40px;
    border-radius: 35px;
    position: absolute;
}

.right{
  right: 0;
}

.shape-1{
  right: 40px;
  background: #fff;
  top: -60px;
  transition: all linear .5s;
}

.shape-2{
  right: 20px;
  background: #7f00ff;
  top: -10px;
  transition: all linear .5s;
}

.shape-3{
    background-color: #fff;
    top: -60px;
    transition: all linear .5s;
}

&:hover .shape-1{
  top: -30px;
}

&:hover .shape-2{
    top: -30px;
}

&:hover .shape-3{
    top: -40px;
}

.shape-4{
    background-color: #7f00ff;
    top: -27px;
    transition: all linear .5s;
}

.shape-5{
    background-color: #fff;
    left: 20px;
    top: 17px;
    transition: all linear .5s;
}

.shape-6{
    background-color: #7f00ff;
    left: 40px;
    top: -27px;
    transition: all linear .5s;
}

&:hover .shape-4{
    top: -7px;
}
&:hover .shape-5{
    top: 0;
}
&:hover .shape-6{
    top: -15px;
}
`;

const Img = styled.div`
padding-top: 30px;
background-color: #fff;
border-radius: 50%;
width: 200px;
height: 190px;
margin: 0 auto;
margin-top: 20px;

img{
  height: 140px;
  width: 100%;
  padding: 10px;
}
`;

const Description = styled.div`
padding-bottom: 30px;
text-align: center;
margin-top: 30px;

h2{
  text-transform: uppercase;
  color: #fff;
  font-size: 20px;
  letter-spacing: 2px;
  font-family: "Nunito", sans-serif;
}

p{
  margin-top: 20px;
  color: #fff;
  margin: 20px;
  font-size: 15px;
  font-family: "Rubik", sans-serif;
}
`;

const Shapes = styled.div`
position: relative;
`;

const Btn = styled(Link)`
display: inline-block;
background-color: #fff;
color: #7f00ff;
text-decoration: none;
outline: none;
border: none;
font-family: "Nunito", sans-serif;
font-size: 0.9em;
left: 22%;
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
    border: 2px solid white;
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

const Service = () => {
  return (
    <Section>
      <H1>Our Services</H1>
      <Services>
        <Service1>
          <Shapes>
            <div className="shape-1 right"></div>
            <div className="shape-2 right"></div>
            <div className="shape-3 right"></div>
          </Shapes>
          <Img>
            <img src={Svgone} alt=""/>
          </Img>
          <Description>
            <h2>Customize your own</h2>
            <p>Customize your own phone case with our photo grid or photo collage builder. Make photo grid phone case easily with your own photos and style your own phone!
            </p>
          </Description>
          <Btn to="/ecommerce-website/about">Explore now</Btn>
          <Shapes>
            <div className="shape-4"></div>
            <div className="shape-5"></div>
            <div className="shape-6"></div>
          </Shapes>
        </Service1>

        <Service1>
          <Shapes>
            <div className="shape-1 right"></div>
            <div className="shape-2 right"></div>
            <div className="shape-3 right"></div>
          </Shapes>
          <Img>
            <img src={Svgtwo} alt=""/>
          </Img>
          <Description>
            <h2>Unlimited Styles</h2>
            <p>Our cases come with different colors and styles. You can expect the same high quality cases that are built to be dropped. We've got you covered.
            </p>
          </Description>
          <Btn to="/ecommerce-website/about">Explore now</Btn>
          <Shapes>
            <div className="shape-4"></div>
            <div className="shape-5"></div>
            <div className="shape-6"></div>
          </Shapes>
        </Service1>

        <Service1>
          <Shapes>
            <div className="shape-1 right"></div>
            <div className="shape-2 right"></div>
            <div className="shape-3 right"></div>
          </Shapes>
          <Img>
            <img src={Svgthree} alt=""/>
          </Img>
          <Description>
            <h2>Fast Delivery</h2>
            <p>We promise to provide customers the best service in the town. We shipped our items globally. No matter where you are from, we will shipped right to your house. 
            </p>
          </Description>
          <Btn to="/ecommerce-website/about">Explore now</Btn>
          <Shapes>
            <div className="shape-4"></div>
            <div className="shape-5"></div>
            <div className="shape-6"></div>
          </Shapes>
        </Service1>

      </Services>
    </Section>
  )
}

export default Service