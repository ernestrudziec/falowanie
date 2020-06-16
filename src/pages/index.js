import React, {useState} from "react"
import styled from 'styled-components';

import paulina from '../assets/images/paulina_main.jpg';

import { Link } from "gatsby";
import Navigation
    from "../components/Navigation/Navigation";
import {Helmet} from "react-helmet";
import Footer from "../components/Footer";



const Hero = styled.div`
flex-direction: column;
min-height: 60vh;
width: 100vw;
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
background: linear-gradient(45deg, rgba(0,0,0,1) -30%, rgba(0,0,0,0));


z-index: -1;


}

button{
font-size: 1.5em;
padding: 0.5em 2em;
font-weight: 900;
text-transform: uppercase;
background: transparent;
border: solid 1px white;
border-radius: 2px;
color: white;
font-family: "Cormorant Garamond", serif;
transition: 0.3s ease-in-out;
cursor: pointer;
outline: none;

@media screen and (max-width: 800px){
font-size: 1em;
}

:hover{
background: white;
color: #333333;
}
}

@media screen and (max-width: 800px){
min-height: 70vh;
}
`;

const HeroQuote = styled.h1`
color: white;
max-width: 600px;
text-align: center;

@media screen and (max-width: 800px){
font-size: 1.6em;
}
`;

const IndexPage = () => {



    return (
        <Hero>
            <HeroQuote>
                beauty isn’t perfection; life isn’t without
                suffering;
                and a piece of writing can never be
                flawless.
            </HeroQuote>
            <Link to='/articles'>
            <button>
                Zobacz o czym piszę
            </button>
            </Link>
        </Hero>
    )

};

export default IndexPage
