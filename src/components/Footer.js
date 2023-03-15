import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import img1 from '../img/logo2.svg'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const FooterContainer = styled.footer`
background-color: #000000;
color: #fff;

`;

const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
    padding-top: 32px;
}
`

const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`

const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
}
`

const FooterLinkTitle = styled.h1`
font-size: 16px;
margin-bottom: 16px;
font-family: 'Rubik', sans-serif;
`

const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover{
    cursor: pointer;
    color: #0033FF;
    transition: 0.3s ease-out;
}
`

const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`

const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`

const SocialLogo = styled(Link)`
justify-self: start;
cursor: pointer;
text-decoration: none;
display: flex;
align-items: center;
font-weight: bold;
color: #fff;
font-family: 'Nunito', sans-serif;

img{
    margin-top: -20px;
    width: 80%;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}
`

const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
`

const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`

const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;

&:hover{
    color: #0033FF;
    transition: 0.3s ease-out;
}
`

const Footer = () => {
    const toggleHome = () => {
       scroll.scrollToTop();
    };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/ecommerce-website/about'>About Us</FooterLink>
                        <FooterLink to='/ecommerce-website/about'>Our Story</FooterLink>
                        <FooterLink oto='/ecommerce-website/products'>Our Products</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/ecommerce-website/contact'>Contact</FooterLink>
                        <FooterLink to='/ecommerce-website/contact'>Support</FooterLink>
                        <FooterLink to='/ecommerce-website/contact'>Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Our Partners</FooterLinkTitle>
                        <FooterLink >Stranger Things</FooterLink>
                        <FooterLink >BTS</FooterLink>
                        <FooterLink >Pixar Toy Story</FooterLink>
                        <FooterLink >Harry Potter</FooterLink>
                        <FooterLink >One Piece</FooterLink>
                        <FooterLink >Kakao Friends</FooterLink>
                        <FooterLink >Aespa</FooterLink>
                        <FooterLink >Olivia Rodrigo</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/ecommerce-website/signin">Instagram</FooterLink>
                        <FooterLink to="/ecommerce-website/signin">Facebook</FooterLink>
                        <FooterLink to="/ecommerce-website/signin">Youtube</FooterLink>
                        <FooterLink to="/ecommerce-website/signin">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}><img src={img1} alt="/"/></SocialLogo>
                    <WebsiteRights>logo © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/" target="_blank" aria-label="Facebook">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.youtube.com/" target="_blank" aria-label="Facebook">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="https://twitter.com/login" target="_blank" aria-label="Facebook">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/" target="_blank" aria-label="Facebook">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer