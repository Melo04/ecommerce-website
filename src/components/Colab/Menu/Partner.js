import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"

const InnerCarousel = styled(motion.div)`
display: flex;
margin-bottom: 30px;
`

const Carousel = styled(motion.div)`
cursor: grab;
overflow: hidden;
margin: 0 10px;
`

const Img = styled.img`
min-height: 20rem;
min-width: 20rem;
padding: 40px;
width: 100%;
height: 100%;
border-radius: 3.5rem;
pointer-events: none;
`

const FilterBtn = styled.button`
  background-color: white; 
  color: black; 
  border: 2px solid #9E30FF;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  display: inline-block;
  font-size: 16px;
  margin: 10px 20px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #9E30FF;
    color: white;
  }
`;

const Partner = ({filterCollab}) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  return (
    <div>
        <Carousel ref={carousel} whileTap={{cursor: "grabbing"}}>
            <InnerCarousel drag="x" dragConstraints={{right:0, left: -width}}>
              
                  <motion.div onClick={() => filterCollab('Stranger')}>
                    <Img src="https://cdn-stamplib.casetify.com/cms/image/f41f01286b45949a06ed9f689dcab7f0.jpg" alt=""/>
                  </motion.div>
                  <motion.div onClick={() => filterCollab('Bts')}>
                    <Img src="https://assets.teenvogue.com/photos/6151ee339a8197316a7c196d/master/w_1600%2Cc_limit/09_IGF.jpg" alt=""/>
                  </motion.div>
                  <motion.div onClick={() => filterCollab('Toy')}>
                    <Img src="https://cdn-stamplib.casetify.com/cms/image/0ed20e68a08cd6e88f23f026c4abb858.jpg" alt=""/>
                  </motion.div>
                  <motion.div onClick={() => filterCollab('Piece')}>
                    <Img src="https://cdn-stamplib.casetify.com/cms/image/0a252979b21ac6f7c608848339d0f03d.png" alt=""/>
                  </motion.div>
                  <motion.div onClick={() => filterCollab('Potter')}>
                    <Img src="https://cdn-stamplib.casetify.com/cms/image/2d6a340ba53ec798cc07b527575b91fd.png" alt=""/>
                  </motion.div>
                  <motion.div onClick={() => filterCollab('Aespa')}>
                    <Img src="https://cdn-stamplib.casetify.com/cms/image/6a65c5b620bdf19b77997c733ed9d0d4.png" alt=""/>
                  </motion.div>
                  <motion.div onClick={() => filterCollab('Peanuts')}>
                    <Img src="https://cdn-stamplib.casetify.com/cms/image/13186cdad47389f57f42a189697d56ac.jpg" alt=""/>
                  </motion.div>
                  <motion.div onClick={() => filterCollab('Blackpink')}>
                    <Img src="https://cf.shopee.tw/file/6df0601c153add9fc807c5593b276a5c" alt=""/>
                  </motion.div>
                  <motion.div onClick={() => filterCollab('Kakao')}>
                    <Img src="https://cdn.shopify.com/s/files/1/0345/7135/4243/products/0004a_ffb4fb89-ddfc-4d94-b3c4-88e802dca68c_816x700.jpg?v=1626676160" alt=""/>
                  </motion.div>
            
            </InnerCarousel>
        </Carousel>
        <FilterBtn onClick={() => filterCollab('all')}>All Cases</FilterBtn>
        <FilterBtn onClick={() => filterCollab('Stranger')}>Stranger Things</FilterBtn>
        <FilterBtn onClick={() => filterCollab('Bts')}>Bts</FilterBtn>
        <FilterBtn onClick={() => filterCollab('Toy')}>Toy Story</FilterBtn>
        <FilterBtn onClick={() => filterCollab('Piece')}>One Piece</FilterBtn>
        <FilterBtn onClick={() => filterCollab('Potter')}>Harry Potter</FilterBtn>
        <FilterBtn onClick={() => filterCollab('Aespa')}>Asepa</FilterBtn>
        <FilterBtn onClick={() => filterCollab('Peanuts')}>Snoopy X Charlie Brown</FilterBtn>
        <FilterBtn onClick={() => filterCollab('Blackpink')}>Blackpink</FilterBtn>
        <FilterBtn onClick={() => filterCollab('Kakao')}>Kakao Friends</FilterBtn>
    </div>
  )
}

export default Partner