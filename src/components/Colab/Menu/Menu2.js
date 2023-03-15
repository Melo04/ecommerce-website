import React, {useState} from 'react'
import styled from 'styled-components'
import { cases } from '../../data'
import Cases2 from './Cases2'
import Partner from './Partner'
import Typewriter from 'typewriter-effect';

const SectionP1 = styled.section`
text-align: center;
margin-top: 100px;
`;

const Title = styled.h2`
font-size: 42px;
text-transform: capitalize;
color: #000000;
align-self: center;
text-align: center;
justify-content: center;
font-family: 'Nunito', sans-serif;

@media (max-width: 450px){
    margin-left: 50px;
}

h3{
    margin: 0px 80px;
    font-size: 30px;
    margin-bottom: 50px;
}

span{
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
}

.text-1{
    color: red;
}
.text-2{
    color: orange;
}
.text-3{
    color: blue;
}
.text-4{
    color: green;
}
.text-5{
    color: #9E30FF;
}
.text-6{
    color: lightblue;
}
.text-7{
    color: pink;
}
.text-8{
    color: #9E30FF;
}
.trendy{
background: #00f260; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #00f260, #0575e6); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #00f260, #0575e6);
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;
}
@media (max-width: 70em){
    font-size: 30px;
}
@media (max-width: 60em){
    align-self: center;
    text-align: center;
    margin-bottom: 80px;
}
@media (max-width: 40em){
    width: 90%;
}
`;

const Menu = () => {
    const products = cases.filter((item, index) => index < 40);
    const [collabItems, setCollabItems] = useState(products);

    const filterCollab = (collab) => {
        if(collab === 'all'){
            setCollabItems(products);
            return;
        }
        const newCollab = products.filter((item) => item.collab === collab);
        setCollabItems(newCollab);
    }

  return (
    <>
    <SectionP1>
        <>
        <Title>
        <h3>Get your hands on tech accessories 🚀 featuring iconic characters and elements with our latest collaboration</h3>
        <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
        onInit={(typewriter) => {
            typewriter.typeString('<span class="text-1">Stranger Things.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2">One Piece.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-3">Kakao Friends.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-4">Harry Potter.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-5">BTS.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-6">Toy Story.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-7">Blackpink.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-8">Aespa.</span>')
            .pauseFor(2000)
            .deleteAll()
            .start()
        }}
        />  
        </Title>
        <Partner filterCollab={filterCollab}/>
        <Cases2 cases={collabItems}/>
        </>
    </SectionP1>
    </>
  )
}

export default Menu