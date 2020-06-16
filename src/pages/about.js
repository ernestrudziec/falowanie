import React, { useEffect } from "react"
import styled from "styled-components"
import paulina1 from "../assets/images/paulina3.jpg"
import paulina2 from "../assets/images/paulina5.jpg"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const StyledInsideWrapper = styled.article`
  white-space: pre-wrap;
  display: flex;
  width: 45%;
  padding: 1em;
  flex-wrap: wrap;

  img {
    height: 500px;
    width: 100%;
    object-fit: cover;
    margin: 2em 0;
  }

  line-height: 2em;

  @media screen and (max-width: 800px) {
    width: 95%;
  }
`

const StyledInsideWrapperRight = styled(StyledInsideWrapper)`
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 2%;
  }
`

const Wrapper = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const AboutPage = ({ data }) => {
  const LEFT_SIDE_PARAGRAPH = data.allDatoCmsOMnie.edges[0].node.lewyTekst
  const RIGHT_SIDE_PARAGRAPH = data.allDatoCmsOMnie.edges[0].node.prawyTekst
  const LEFT_PHOTO_URL = data.allDatoCmsOMnie.edges[0].node.leweZdjecie.url
  const RIGHT_PHOTO_URL = data.allDatoCmsOMnie.edges[0].node.praweZdjecie.url

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <Wrapper>
      <StyledInsideWrapper>
        <p>
          <ReactMarkdown source={LEFT_SIDE_PARAGRAPH} />
        </p>
        <img src={LEFT_PHOTO_URL} />
      </StyledInsideWrapper>
      <StyledInsideWrapperRight>
        <img src={RIGHT_PHOTO_URL} />
        <p>
          <ReactMarkdown source={RIGHT_SIDE_PARAGRAPH} />
        </p>
      </StyledInsideWrapperRight>
    </Wrapper>
  )
}

export const query = graphql`
  query AboutMeQuery {
    allDatoCmsOMnie {
      edges {
        node {
          lewyTekst
          prawyTekst
          praweZdjecie {
            url
          }
          leweZdjecie {
            url
          }
        }
      }
    }
  }
`

export default AboutPage
