import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { cases } from '../../data'
import styled from "styled-components"
import Navigation from '../../Navigation'
import Footer from '../../Footer'
import { ShopContext } from './shop-context';

const Container = styled.div`
width: 100%;
min-height: 100vh;
background: #d0eaff;
display: flex;
align-items: center;
justify-content: center;
`
const Product = styled.div`
width: 90%;
min-height: 450px;
max-width: 800px;
display: flex;
`
const Gallery = styled.div`
flex-basis: 47%;
background: #fff;
transform: scale(1.1);
box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
position: relative;

img{
    position: absolute;
    width: 100%;
    display: block;
    padding-top: 50px;
}
`
const Details = styled.div`
flex-basis: 53%;
background: #fff;
padding: 40px;
padding-left: 60px;
box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
font-size: 13px;
font-weight: 500;
color: #777;

h1{
    color: #333;
    font-size: 35px;
}

h2{
    color: #555;
    font-size: 30px;
    font-weight: 600;
}

h3{
    color: #00d874;
    margin-bottom: 20px;
}

form{
    margin-left: -80px;
    font-size: 15px;
    font-weight: 400;
}
`

const Colorselect = styled.div`
display: flex;
align-items: center;
margin-top: 20px;

p{
    width: 75px;
}

span{
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 30px;
    cursor: pointer;
}

.color-1{
    background-color: red;
}
.color-2{
    background-color: #00d874;
}
.color-3{
    background-color: blue;
}
.color-4{
    background-color: pink;
}
input{
    display: none;
}
input:checked + span{
    transform: scale(0.7);
    box-shadow: 0 0 0 4px #fff, 0 0 0 6px #000;
}
`

const Btn = styled.button`
    width: 160px;
    height: 40px;
    font-size: 13px;
    margin-top: 30px;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
`

const SingleItem = () => {
    const {addToCart} = useContext(ShopContext);
    const {productId} = useParams();
    const thisProduct = cases.find(prod => prod.id === Number(productId));

    return(  
    <>
    <Navigation/>
    <Container>
        <Product>
            <Gallery>
                <img src={thisProduct.img} alt=''/>
            </Gallery>
            <Details>
                <h1>{thisProduct.title}</h1>
                <h2>RM {thisProduct.price}</h2>
                <h3>30% off</h3>
                <p>{thisProduct.des}</p>
                <form>
                    <Colorselect>
                        <p>Color</p>
                        <label>
                            <input type="radio" name="color" id="red"/>
                            <span class="color-1"></span>
                        </label>
                        <label>
                            <input type="radio" name="color" id="green"/>
                            <span className='color-2'></span>
                        </label>
                        <label>
                            <input type="radio" name="color" id="blue"/>
                            <span className='color-3'></span>
                        </label>
                        <label>
                            <input type="radio" name="color" id="pink"/>
                            <span className='color-4'></span>
                        </label>
                    </Colorselect>
                </form>
                <Btn onClick={() => addToCart(thisProduct.id)}>Add To Cart</Btn>
            </Details>
        </Product>
    </Container>
    <Footer/>
    </>
    )
}

export default SingleItem