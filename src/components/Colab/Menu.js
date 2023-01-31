import React, {useState} from 'react'
import styled from 'styled-components'
import { cases } from '../data'
import Cases from './Cases'
import Category from './Category'
import Typewriter from 'typewriter-effect';

const SectionP1 = styled.section`
text-align: center;
margin-top: 80px;
`;

const Title = styled.h2`
font-size: 42px;
text-transform: capitalize;
color: #000000;
align-self: center;
text-align: center;
font-family: 'Nunito', sans-serif;

h3{
    font-size: 30px;
    margin-bottom: 30px;
}

span{
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
}

.text-1{
    color: #9E30FF;
}
.text-2{
    color: lightblue;
}
.text-3{
    color:grey;
}
.text-4{
    color: orange;
}
.text-5{
    color: lightgreen;
}
.text-6{
    color: red;
}
.text-7{
    color: yellow;
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
    const products = cases.filter((item, index) => index > 40);
    const [collabItems, setCollabItems] = useState(products);

    const filterCollab = (collab) => {
        const newCollab = products.filter((item) => item.collab === collab);
        setCollabItems(newCollab);
    }

  return (
    <>
    <SectionP1>
        <>
        <Title>
        <h3>Get your hands on tech accessories 🚀 featuring our popular artists</h3>
        <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
        onInit={(typewriter) => {
            typewriter.typeString('<span class="text-1">Illustrata.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2">Don Mak.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-3">Giselle Dakel.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-4">Sam Taylor.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-5">Gia Graham.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-6">Squid Game.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-7">Minions.</span>')
            .pauseFor(2000)
            .deleteAll()
            .start()
        }}
        />  
        </Title>
        <Category filterCollab={filterCollab}/>
        <Cases cases={collabItems}/>
        </>
    </SectionP1>
    </>
  )
}

export default Menu