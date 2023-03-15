import React, {useContext} from 'react'
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { ShopContext } from './shop-context';

const ProContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding-top: 20px;
flex-wrap: wrap;
margin: 50px 50px;
grid-column-gap: 10px;
grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Pro = styled.div`
flex-basis: calc(25% - 20px);
min-width: 150px;
padding: 15px 8px;
text-decoration: none;
color: #000;
border: 1px solid #E8C788;
border-radius: 30px;
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
margin: 15px 0;
transition: 0.2s ease;

@media (max-width: 900px){
    flex-basis: calc(50% - 20px)
}

img{
    width: 90%;
    height: auto;
}

&:hover{
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
`;

const Des = styled.div`
text-align: start;
padding: 10px 20px;
text-transform: capitalize;

span{
    color: #FF0000;
    font-size: 15px;
    font-family: 'Rubik', sans-serif;
}
h5{
    padding-top: 7px;
    color: #000;
    font-size: 18px;
    font-family: 'Rubik', sans-serif;
}
h3{
    color: #8A8A8A;
    font-size: 15px;
}
h4{
    padding-top: 7px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #FF0000;
    font-family: 'Rubik', sans-serif;
}
`;

const Cart = styled.div`
width: 40px;
height: 40px;
align-items: center;
font-size: 20px;
line-height: 45px;
border-radius: 50px;
background-color: #FF0000;
color: #fff;
float: right;
margin-top: -30px;
margin-right: 10px;

@media screen and (max-width: 900px){
    margin-top: -30px;
}

&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #FF0000;
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

const Details = styled(Link)`
text-decoration: none;
color: #000;
`

const Btn = styled(Link)`
color: #000;
text-decoration: none;

&:hover {
    color: #FF0000;
}
`

const Cases2 = ({cases}) => {
    const {addToCart} = useContext(ShopContext);

        const products = cases.map((item) => {
            return(
                <Pro key={item.id}>
                    <img src={item.img} alt=""/>
                    <Details to={`/ecommerce-website/products/${item.id}`}>
                        <Des>
                            <span>{item.category}</span>
                            <h5>{item.title}</h5>
                            <h3>{item.des}</h3>
                            <h4>RM {item.price}</h4>
                            <Btn to={`/ecommerce-website/products/${item.id}`}>View Details 👈</Btn>
                        </Des>
                    </Details>
                    <Cart onClick={() => addToCart(item.id)}><AiOutlineShoppingCart/></Cart>
                </Pro>
            )
        });
    
        return(
            <>
            <ProContainer>{products}</ProContainer>
            </>
        );
}

export default Cases2