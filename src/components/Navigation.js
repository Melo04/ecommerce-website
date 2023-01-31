import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Button from './About/Button';
import Logo from './About/Logo';
import {FaShoppingCart} from 'react-icons/fa';
import { ShopContext } from './Colab/Menu/shop-context';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase'
import img1 from '../img/products/user.png'

const Section = styled.section`
width: 100vw;
background: transparent;
position: sticky;
top: 0;
z-index: 999;
`;

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: 6rem;
margin: 0 auto;
background: transparent;
position: sticky;

.mobile{
    display: none;
    
    img{
        display: flex;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        transition: 0.2s ease-in-out;
        border: 3px solid #A9A9A9;

        &:hover{
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
    }
}

.desktop{
    img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: -20px;
        transition: 0.2s ease-in-out;
        border: 3px solid #A9A9A9;

        &:hover{
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
    }
}

@media (max-width: 64em){
.desktop{
    display: none;
}
.mobile{
    display: inline-block;
}
}
`

const Img = styled.img`

`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media (max-width: 64em){
    visibility: ${props => props.click ? 'visible' : `hidden`};
    position: fixed;
    top: 5.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${props => `calc(100vh - 6rem)`};
    z-index: 50;
    color: #fff;
    backdrop-filter: blur(10px);
    transform: ${props => props.click ? 'translateY(0)' : `translateY(100%)`};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;
}
`;

const MenuItem = styled.li`
margin: 0 1rem;
color: #000;
cursor: pointer;
margin-top: 20px;
font-size: 1.1em;

&::after{
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background: #000;
    transition: width 0.3s ease;
}

&:hover::after{
    width: 100%;
}

@media (max-width: 64em){
    margin: 1rem 0;
}
`

const CartIcon = styled(Link)`
margin-left: -15%;
color: #000;
`

const NavLinks = styled(Link)`
text-decoration: none;
color: black;

&:hover{
    color: black;
}
`

const HamburgerMenu = styled.span`
width: ${props => props.click ? `2rem` : `1.5rem`};

height: 2px;
background: #000;

position: absolute;
top: 2.8rem;
right: 5%;
transform: ${props => props.click ? `translateX(-50%) rotate(90deg)` : `translateX(-50%) rotate(0)`};

display: none;
justify-content: center;
align-items: center;

cursor: pointer;
transition: all 0.3s ease;

@media (max-width: 64em){
    display: flex;
}

&::after, &::before{
    content: ' ';
    width: ${props => props.click ? `1rem` : `1.5rem`};
    height: 2px;
    right: ${props => props.click ? `-2px` : `0`};
    background: #000000;
    position: absolute;
    transition: all 0.3s ease;
}

&::after{
    top: ${props => props.click ? `0.3rem` : `0.5rem`};
    transform: ${props => props.click ? `rotate(-40deg)` : `rotate(0)`};
}
&::before{
    bottom: ${props => props.click ? `0.3rem` : `0.5rem`};
    transform: ${props => props.click ? `rotate(40deg)` : `rotate(0)`};
}
`

const Icon = styled.div`
font-size: 25px;
color: #FF0000;
transition: 0.2s ease-in;

&:hover{
    color: #9859FF;
}
`;

const AmountC = styled.div`
position: absolute;
top: 0.9rem;
right: -0.8rem;
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
color: #fff;
background: #000;
display: flex;
align-items: center;
justify-content: center;
`

const Navigation = () => {
    const {cartAmount} = useContext(ShopContext);
    const [click, setClick] = useState(false);
    const [user] = useAuthState(auth);
    
  return (
    <>
    <Section id='navigation'>
        <NavBar>
            <Logo/>
            <HamburgerMenu click={click} onClick={() => setClick(!click)}>
                &nbsp;
            </HamburgerMenu>
            <Menu click={click}>
                <MenuItem>
                    <NavLinks to="/">Home</NavLinks>
                </MenuItem>
                <MenuItem>
                    <NavLinks to="/about">About</NavLinks>
                </MenuItem>
                <MenuItem>
                    <NavLinks to="/products">Products</NavLinks>
                </MenuItem>
                <MenuItem>
                    <NavLinks to="/collaboration">Our Collabs</NavLinks>
                </MenuItem>
                <MenuItem>
                    <NavLinks to="/contact">Contact</NavLinks>
                </MenuItem>

                <div className="mobile">
                    {!user && <NavLinks to="/signin"><Button text="Sign In"></Button></NavLinks>}
                    {user && (<Link to="/cart"> 
                        {user.photoURL && <img src={user.photoURL} alt="avatar" referrerPolicy='no-referrer'/>}
                        {!user.photoURL && <img src={img1} alt=''/>}
                    </Link>)}
                </div>
            </Menu>
            <div className="desktop">
                {!user && <NavLinks to="/signin"><Button text="Sign In"></Button></NavLinks>}
                {user && (<Link to="/cart">
                    {user.photoURL && <Img src={user.photoURL} alt="avatar" referrerPolicy='no-referrer'/>}
                    {!user.photoURL && <img src={img1} alt=''/>}
                </Link>)}
            </div>
            <CartIcon to="/cart">
                <Icon><FaShoppingCart/></Icon>
                <AmountC>
                    <p className="total-amount">{cartAmount()}</p>
                </AmountC>
            </CartIcon>

        </NavBar>
    </Section>
    </>
  )
}

export default Navigation