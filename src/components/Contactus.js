import React from 'react'
import styled from 'styled-components'
import { IoLocationSharp } from 'react-icons/io5';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';

const Section= styled.div`
min-height: 100vh;
width: 100%;
background: url("https://ctgimage1.s3.amazonaws.com/cms/image/4fd6a6033aad4647c5465d169977e81b.jpg");
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
opacity: 0.8;
`;

const Container= styled.div`
width: 80%;
background: #fff;
border-radius: 6px;
padding: 40px 100px 40px 40px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

@media (max-width: 950px) {
    width: 90%;
    padding: 30px 35px 40px 35px;
}
@media (max-width: 820px) {
    margin: 40px 0;
    height: 100%;
}
`;

const Content= styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 820px) {
    flex-direction: column-reverse;
}
`;

const LeftSide= styled.div`
margin-top: 15px;
width: 25%;
height: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&::before{
    content: '';
    position: absolute;
    height: 70%;
    width: 2px;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    background: #afafb6;
}
@media (max-width: 820px) {
    width: 100%;
    flex-direction: row;
    margin-top: 40px;
    justify-content: center;
    flex-wrap: wrap;

    &::before{
        display: none;
    }
}
`;

const RightSide = styled.div`
width: 75%;
margin-left: 75px;

p{
    color: #505050;
    margin-bottom: 20px;
}

@media (max-width: 820px) {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
}
`;

const Details= styled.div`
margin: 14px;
text-align: center;
`;

const Icon = styled.i`
font-size: 30px;
color: #8100F3;
margin-bottom: 10px;
`;

const Topic= styled.div`
font-size: 18px;
font-weight: 500;
`;

const TextOne= styled.div`
font-size: 14px;
color: #8100F3;
`;

const TopicText = styled.div`
font-size: 23px;
font-weight: 600;
color: #505050;
font-family: 'Nunito', sans-serif;
letter-spacing: 1px;
margin-bottom: 10px;
`;

const InputBox = styled.div`
height: 50px;
width: 100%;
margin: 12px 0;

input{
    height: 100%;
    width: 100%;
    border: none;
    font-size: 16px;
    padding: 0 15px;
    background: #EFDDFF;
    border-radius: 6px;
    resize: none;
}
`;

const MessageBox = styled.div`
textarea{
    min-height: 110px;
    height: 100%;
    width: 100%;
    border: none;
    font-size: 16px;
    padding: 12px 12px;
    background: #EFDDFF;
    border-radius: 6px;
    resize: none;
}
`;
const Button = styled.input`
display: inline-block;
margin-top: 30px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
padding: 10px 25px;
border-radius: 10px;
background: #9F33FF;
cursor: pointer;
transition: all 0.3s ease-in-out;

&:hover{
    color: #9F33FF;
    background-color: #fff;
    border: 2px solid #9F33FF;
}
`;

const Contactus = () => {
  return (
    <>
    <Section>
    <Container>
        <Content>
            <LeftSide>
                <Details>
                    <Icon><IoLocationSharp/></Icon>
                    <Topic>Address</Topic>
                    <TextOne>Puchong, Sunway Pyramid</TextOne>
                    <TextOne>Selangor, 49000</TextOne>
                </Details>
                <Details>
                    <Icon><AiFillPhone/></Icon>
                    <Topic>Phone</Topic>
                    <TextOne>+6019 6458</TextOne>
                    <TextOne>+ 9876543212</TextOne>
                </Details>
                <Details>
                    <Icon><BsFillEnvelopeFill/></Icon>
                    <Topic>Email</Topic>
                    <TextOne>contact@gmail.com</TextOne>
                    <TextOne>latte@gmail.com</TextOne>
                </Details>
            </LeftSide>

            <RightSide>
                <TopicText>Send Us A Message</TopicText>
                <p>Any inquiries to ask? Let's get in touch now. Send us a message here, we would be happy to help you.</p>
                <InputBox>
                <input type="text" placeholder="Enter your name"/>
                </InputBox>
                <InputBox>
                <input type="text" placeholder="Enter your email"/>
                </InputBox>
                <MessageBox>
                <textarea placeholder='Type your message here'></textarea>
                </MessageBox>
                <Button type="button" value="Send Now"/>
            </RightSide>
        </Content>
    </Container>
    </Section>
    </>
  )
}

export default Contactus