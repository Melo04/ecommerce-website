import React, {useContext}  from 'react'
import styled from 'styled-components'
import Carousel from "react-elastic-carousel"
import { productItems } from '../data'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { ShopContext } from '../Colab/Menu/shop-context';

const Title = styled.h1`
position: relative;
text-align: center;
margin-bottom: 50px;
margin-top: 50px;
font-family: 'Rubik', sans-serif;
font-size: 30px;
letter-spacing: 2px;
color: #964B00;
text-transform: uppercase;

&::after{
  content: '';
  position: absolute;
  left: 45%;
  bottom: -10px;
  width: 70px;
  height: 3px;
  background: #964B00;
  border-radius: 20px;
}
`;

const Subtitle = styled.h2`
text-align: center;
font-size: 20px;
margin-bottom: 50px;
letter-spacing: 2px;
margin-top: -20px;
`

const Container = styled.div`
.rec.rec-arrow {
  background-color: #964B00;
  color: #fff;
  margin: 0px 20px;
}
button.rec-dot_active{
  background-color: #964B00;
  box-shadow: 0 0 1px 3px #D3D3D3;
}
margin-bottom: 60px;
`

const Item = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 430px;
  width: 270px;
  margin: 20px 10px;
  font-size: 4em;
  box-shadow: 2px 2px 30px rgba(0,0,0,0.2);
`;

const Img = styled.img`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: -160px;
    width: 100%;
    height: 280px;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: transform .3s;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`;

const DetailBox = styled.div`
    margin-top: 250px;
    position: absolute;
    margin-left: -40px;
`

const Name = styled.h2`
    color: #612626 ;
    font-size: 20px;
    margin-bottom: 20px;
`;

const Discount = styled.h2`
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 10px;
    margin-top: 10px;
    color: #fff;
    border-radius: 50px;
    width: 90px;
    text-align: center;
    background-color: #FF0000;
    padding: 7px 13px;
    font-size: 14px;
`;

const Type = styled.h2`
    margin-top: 10px;
    color: #fff;
    border-radius: 20px;
    width: 150px;
    background-color: #FF0000;
    text-align: center;
    padding: 7px 13px;
    font-size: 14px;
    margin-bottom: -15px;
    margin-right: 40px;
`;

const Price = styled.h2`
font-size: 18px;
margin-top: -45px;
float: right;
margin-right: -30px;
`;

const Btn = styled.button`
display: inline-block;
background-color: #964B00;
float: right;
color: #fff;
outline: none;
border: none;
font-size: 22px;
padding: 12px 15px 8px 13px;
border-radius: 50%;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
margin-top: -20px;
margin-right: -30px;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 1px solid #964B00;
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


const breakPoints = [
    { width: 700, itemsToShow: 1},
    { width: 760, itemsToShow: 2},
    { width: 768, itemsToShow: 3},
    { width: 1200, itemsToShow: 4},
];

const FlashCard = () => {
  const {addToCart} = useContext(ShopContext);

  return (
    <>
    <Title>Trending Designs</Title>
    <Subtitle>Protective. Sustainable. Unlimited Style.</Subtitle>
    <Container>
      <Carousel breakPoints={breakPoints}>
        {productItems.map((item) => {
          const {id, discount, img, name, price, type} = item;
          return(
            <Item key={id}>
                <Img src={img}/>
                  <DetailBox>
                  <Name>{name}</Name>
                  <Price>${price}</Price>
                  <Type>{type}</Type>
                  <Btn onClick={() => addToCart(item.id)}><AiOutlineShoppingCart/></Btn>
                  </DetailBox>
                <Discount>{discount}</Discount>
            </Item>
          );
        })}
      </Carousel>
    </Container>
    </>
  )
}

export default FlashCard