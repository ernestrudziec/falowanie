import React, { useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"

const ContactWrapper = styled.div`
  white-space: pre-wrap;
`

const OfferPage = ({ data }) => {
  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <>
      <Helmet>
        <title>Falowanie - Oferta</title>
      </Helmet>
      <ContactWrapper>
        <ReactMarkdown source={data.allDatoCmsOfertaPage.nodes[0].tresc} />
      </ContactWrapper>
    </>
  )
}

export const query = graphql`
  query MyQuerys {
    allDatoCmsOfertaPage {
      nodes {
        tresc
      }
    }
  }
`

export default OfferPage
