import React from "react"
import styled from 'styled-components';
import '../index.css';
import paulina from '../assets/images/paulina7.webp';

import Navigation
    from "../components/Navigation/Navigation";
import {Helmet} from "react-helmet";
import Footer from "../components/Footer";

const Wrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
background: #E9E5DD;
margin: 0;
padding: 0;
min-height: 100vh;
`;

const Hero = styled.div`
min-height: 70vh;
width: 100%;
position: relative;
z-index: 0;
display: flex;
justify-content: center;
align-items: center;
padding: 0 3em;

::before{
position: absolute;
content: "";
left: 0;
right: 0;
bottom: 0;
top: 0;
background: url(${paulina}) center no-repeat;
background-size: cover;
filter: grayscale();
z-index: -2;
}

::after{
position: absolute;
content: "";
left: 0;
right: 0;
bottom: 0;
top: 0;
background: linear-gradient(45deg, rgba(0,0,0,1), rgba(0,0,0,0));


z-index: -1;
}
`;

const HeroQuote = styled.h1`
color: white;
max-width: 600px;
text-align: center;
`;

const IndexPage = () => (
  <Wrapper>
      <Helmet>
          <script
              src="https://kit.fontawesome.com/165b719f88.js"
              crossOrigin="anonymous">
          </script>
      </Helmet>
      <Navigation/>
      <Hero>
          <HeroQuote>
              beauty isn’t perfection; life isn’t without suffering;
              and a piece of writing can never be flawless.
          </HeroQuote>
      </Hero>
      <Footer/>
  </Wrapper>
);

export default IndexPage
