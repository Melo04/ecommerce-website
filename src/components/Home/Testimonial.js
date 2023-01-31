import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import {people} from '../data'
import { Link } from 'react-router-dom';

const Title = styled.div`
margin: 50px 0px;

position: relative;
text-align: center;

h1{
  background: #00f260; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #00f260, #0575e6); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #00f260, #0575e6);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Nunito', sans-serif;
}

p{
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #fff;
  margin-top: 20px;
}

&::after{
  content: '';
  position: absolute;
  left: 45%;
  bottom: 40px;
  width: 80px;
  height: 6px;
  background: #fff;
  border-radius: 20px;
}
`

const UserCards = styled.div`
background-color: #000;
background-size: cover;
background-repeat: no-repeat;
padding: 2em;
display: flex;
justify-content: center;
align-items: center;
margin-left: 0;
margin-right: 0;
flex-wrap: wrap;
min-height: 100vh;

.swiper-container{
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide{
  background-position: center;
  background-size: cover;
  width: 350px;
  min-height: 350px;
}
`
const Card = styled.div`
margin: 3em 1em 1em 1em;
max-width: 30em;
background: rgba(171, 171, 171, 0.1);
color: #fff;
padding: 2em;
text-align: center;
border-radius: 0.8em;
box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
position: relative;
backdrop-filter: blur(4px);
border: 1px #555 solid;

&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(
        0deg,
        #59fc72,
        #02bafc
    );
    width: 0;
    height: 0;
    z-index: -1;
    border-radius: inherit;
}

h2{
    margin: 1em 0 0 0;
}

p{
    color: #fff;
    font-size: 0.9em;
    line-height: 27px;
    max-width: 20em;
    margin: 1.5em auto 2em auto;
    transition: 0.2s;
}

small{
    color: #646771;
    font-size: 1.1em;
    transition: 0.2s;
}

&:hover{
    small{
        color: #fff;
    }
    p{
      color: #000;
    }
}

&:hover::before{
    animation: fill 1s ease-in-out forwards;
}

@keyframes fill{
    40%{
        width: 100%;
        height: 0.5em;
    }
    50%{
        width: 100%;
        height: 0.5em;
    }
    100%{
        width: 100%;
        height: 100%;
    }
}
`

const Btn = styled(Link)`
  background: rgba(171, 171, 171, 0.2);
  border: none;
  border-radius: 3em;
  padding: 0.8em 2em;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.3s;
  text-decoration: none;

  &:hover{
    background: #fff;
    color: #000;
  }
`

const ProfileImg = styled.div`
width: 120px;
height: 150px;
margin: -4em auto 0 auto;
border-radius: 50%;
background: linear-gradient(
    0deg,
    #59fc72,
    #02bafc
);
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 0 0 0.5em #26293e;

img{
    width: 110px;
    height: 140px;
    background-position: center;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: inherit;
}
`

const Testimonial = () => {
  return (
    <>
    <UserCards>
      <Title>
        <h1>Customer Reviews</h1>
        <p>Read what customers are saying about us</p>
      </Title>
    
      <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {people.map((item) => {
            const {id, img, name, job, comment} = item;
            return(
            <SwiperSlide key={id}>
              <Card>
                  <ProfileImg>
                      <img src={img} alt="user"/>
                  </ProfileImg>
                  <h2>{name}</h2>
                  <small>{job}</small>
                  <p>{comment}</p>
                  <Btn to='/collaboration'>See More</Btn>
              </Card>
            </SwiperSlide>
            )
          })}
        </Swiper>
      </UserCards>
      </>
  )
}

export default Testimonial