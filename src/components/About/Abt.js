import React from 'react'
import styled from 'styled-components'
import img1 from "../../img/products/disney1.png"
import img2 from "../../img/products/disney2.png"
import img3 from "../../img/products/strange1.png"
import img4 from "../../img/products/strange2.png"
import img5 from "../../img/products/bts1.png"
import img6 from "../../img/products/bts2.png"
import Abt2 from './Abt2'
import Abt3 from './Abt3'

const Text = styled.div`
margin: 5rem 6rem;

h1{
  font-size: 3rem;
  text-align: center;
  background: #ff00cc; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ff00cc, #333399); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ff00cc, #333399);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

p{
  font-size: 1.1rem;
}

@media screen and (max-width: 850px){
  margin: 4rem 2rem;
}
`

const Abt = () => {
  return (
    <>
     <Text>
        <h1>OUR COLLABORATIONS</h1>
        <p>We've collaborated with must-know designers and creatives from around the world to bring you the most exclusive phone cases for your iPhone 11 Pro and more. Get ready to dive into our collections.</p>

        <Abt2
        heading="Stranger Things"
        text="Welcome back to Hawkins! The fans favourite science fiction horror drama returns for its 4th season. Our Hawkins friends are growing up and making their way through Hawkins High - all while fighting the new evil, Vecna, that has emerged. Explore the new collection inspired by iconic moments from the newest season and you can also shop the best selling restocked fan favourites from our first drop."
        img={img3}
        img2={img4}/>
        <Abt3
        heading="Disney Toy Story"
        text="Celebrate friendships that stand the test of time with our newest collection: Disney and Pixar's Toy Story. The collaboration keeps the magic of the Toy Story squad alive so you can relive their iconic adventures over and over. Andy's Wallpaper case is soft as a cloud but hard as nails. Protect your phone from the highest of drops with our 3D silicone case."
        img={img1}
        img2={img2}/>
          <Abt2
          heading="BTS Butter"
          text="BTS made history with their song Butter and they're breaking new ground again with this new BTS | CASETiFY Butter tech collection! Join the crowd and deck your gear in BTS's legendary style."
          img={img5}
          img2={img6}/>
    </Text>
    </>
  )
}

export default Abt