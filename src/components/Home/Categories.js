import React from 'react'
import { categories } from '../data'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const CatContainer = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;

@media screen and (max-width: 700px){
  padding: 0px;
  flex-direction: column;
}
`;

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

@media screen and (max-width: 700px){
  height: 60vh;
}
`;

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Title = styled.h1`
color: white;
margin-bottom: 20px;
`;

const Button = styled(Link)`
border: none;
padding: 15px 30px;
text-decoration: none;
background: #00c9ff; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #00c9ff, #92fe9d); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #00c9ff, #92fe9d);
color: #fff;
cursor: pointer;
font-weight: 600;
font-size: 15px;
border-radius: 10px;
transition: 0.5s ease-out;

&:hover{
  border: 2px solid #92fe9d;
  background: #fff;
  color: #00c9ff;
}
`;

const Categories = () => {
  return (
    <CatContainer>
      {categories.map((item)=>{
        return(
        <Container key={item.id}>
          <Image src={item.img}/>
          <Info>
            <Title>{item.title}</Title>
            <Button to="/ecommerce-website/products">Shop Now</Button>
          </Info>
        </Container>
        )
      })}
    </CatContainer>
  )
}

export default Categories