import React from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

const Wrapper = styled.div`
margin: 4rem 5rem;
`;

const Card = styled.div`
min-height: 18rem;
border-radius: 2rem;
overflow: hidden;
position: relative;
cursor: pointer;

img{
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    object-fit: cover;
    
}
h4{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
`;

const Category = ({filterCollab}) => {
  
  return (
    <Wrapper>
        <Splide options={{
            perPage: 4,
            pagination: false,
            drag: "free",
            gap: "4rem",
            breakpoints: {
                1200: {
                perPage: 3,
                gap: "2rem",
                },
                768: {
                perPage: 2,
                gap: "1rem",
                },
                576: {
                perPage: 1,
                gap: "0.5rem",
                },
            },
        }}>

            <SplideSlide>
                <Card onClick={() => {filterCollab('illustrata')}}>
                    <h4>Illustrata</h4>
                    <img src="https://cdn-stamplib.casetify.com/cms/image/587413c631e23cf387c18b93c2137469.jpg" alt=''/>
                    <Gradient/>
                </Card>
            </SplideSlide>

            <SplideSlide>
                <Card onClick={() => filterCollab('HK')}>
                    <h4>Hong Kong</h4>
                    <img src="https://cdn-stamplib.casetify.com/cms/image/730b42a4f64953cbb669caa5ef69cbc5.png" alt=''/>
                    <Gradient/>
                </Card>
            </SplideSlide>

            <SplideSlide>
                <Card onClick={() => filterCollab('Giselle')}>
                    <h4>Don Mak</h4>
                    <img src="https://cdn-stamplib.casetify.com/cms/image/5765262ab1725b04c26652b38a5b29ac.png" alt=''/>
                    <Gradient/>
                </Card>
            </SplideSlide>
            <SplideSlide>
                <Card onClick={() => filterCollab('Sam')}>
                    <h4>Sam Taylor</h4>
                    <img src="https://cdn-stamplib.casetify.com/cms/image/8ec1e0c85efe3b848a87db9e1bc9f0e0.png" alt=''/>
                    <Gradient/>
                </Card>
            </SplideSlide>
            <SplideSlide>
                <Card onClick={() => filterCollab('gia')}>
                    <h4>Gia Graham</h4>
                    <img src="https://cdn-stamplib.casetify.com/cms/image/f808dd32fe105541a3734e778cb6f014.png" alt=''/>
                    <Gradient/>
                </Card>
            </SplideSlide>

        </Splide>
    </Wrapper>
  )
}

export default Category