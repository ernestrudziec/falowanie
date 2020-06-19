import React, { useState, useEffect } from "react"
import styled from "styled-components"

import paulina from "../assets/images/paulina_main.jpg"
import { Link } from "gatsby"
import Navigation from "../components/Navigation/Navigation"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"

const Hero = styled.div`
  flex-direction: column;
  min-height: 70vh;
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3em;

  ::before {
    position: fixed;
    content: "";
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: url(${({ backgroundUrl }) => backgroundUrl}) center no-repeat;
    background-size: cover;
    filter: contrast(90%) saturate(0.7);
    z-index: -2;
  }

  button {
    font-size: 1em;
    padding: 1em 3em;
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

    @media screen and (max-width: 800px) {
      font-size: 1em;
    }

    :hover {
      background: white;
      color: #333333;
    }
  }

  @media screen and (max-width: 800px) {
    min-height: 70vh;
  }
`

const HeroQuote = styled.h1`
  color: white;
  max-width: 600px;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 1.6em;
  }
`

const IndexPage = ({ data }) => {
  const mainPhotoUrl = data.allDatoCmsZdjecieglowne.nodes[0].mainPhoto.url

  useEffect(() => {
    console.log(mainPhotoUrl)
  }, [])

  return (
    <>
      <Helmet>
        <title>Falowanie</title>
      </Helmet>

      <Hero backgroundUrl={mainPhotoUrl}>
        <HeroQuote>
          beauty isn’t perfection; life isn’t without suffering; and a piece of
          writing can never be flawless.
        </HeroQuote>
        <Link to="/dziennik">
          <button>Zobacz o czym piszę</button>
        </Link>
      </Hero>
    </>
  )
}

export const query = graphql`
  query MainPhotoQuery {
    allDatoCmsZdjecieglowne {
      nodes {
        mainPhoto {
          url
        }
      }
    }
  }
`

export default IndexPage
