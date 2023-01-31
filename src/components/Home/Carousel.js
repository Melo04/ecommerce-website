import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper';
import Arrow from "../../img/Arrow.svg"

const Container = styled.div`
width: 25vw;
height: 70vh;

.swiper{
  width: 100%;
  height: 100%;
}
.swiper-slide{
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-button-next{
  color: #fff;
  right: 0;
  top: 60%;
  width: 4rem;

  background-image: url(${Arrow});
  background-position: center;
  background-size: cover;

  &:after{
    display: none;
  }
}
.swiper-button-prev{
  color: #fff;
  left: 0;
  top: 60%;
  width: 4rem;
  transform: rotate(180deg);
  background-image: url(${Arrow});
  background-position: center;
  background-size: cover;

  &:after{
    display: none;
  }
}
img{
  width: 450px;
  height: auto;
}
`

const Carousel = () => {
  return (
    <Container>
      <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        type: 'fraction',
      }}
      scrollbar={{
        draggable: true
      }}
      navigation={true}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Pagination, Navigation, Autoplay]}
      className="mySwiper"
      >
        <SwiperSlide><img src="https://cdn-image02.casetify.com/usr/4787/34787/~v5/25733097x2_iphone-14-pro__color_black_16004725.png.1000x1000-w.m80.jpg" alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn-image02.casetify.com/usr/4787/34787/~v34/11713208x2_iphone13-pro__color_black_16003737.png.1000x1000-w.m80.jpg" alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn-image02.casetify.com/usr/4787/34787/~v2/26293612x2_iphone-14-pro__color_white_16004725.png.1000x1000-w.m80.jpg" alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn-image02.casetify.com/usr/4787/34787/~v3/19824512x2_iphone13-pro__color_green_16003389.png.1000x1000-w.m80.jpg" alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn-image02.casetify.com/usr/4787/34787/~v1/27430560x2_iphone-14-pro_16004737.png.1000x1000-w.m80.jpg" alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn-image02.casetify.com/usr/4787/34787/~v10/23204793x2_iphone-14-pro__color_white_16004733.png.1000x1000-w.m80.jpg" alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn-image02.casetify.com/usr/4787/34787/~v3/26590723x2_iphone-14-pro__color_white_16004920.png.1000x1000-w.m80.jpg" alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn-image02.casetify.com/usr/4787/34787/~v38/21830781x2_iphone-14-pro__color_white_16004886.png.1000x1000-w.m80.jpg" alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn-image02.casetify.com/usr/4787/34787/~v4/26439970x2_iphone-14-pro__color_white_16004733.png.1000x1000-w.m80.jpg" alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn-image02.casetify.com/usr/4787/34787/~v1/26590411x2_iphone-14-pro__color_white_16004904.png.1000x1000-w.m80.jpg" alt="Coffee"/></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel