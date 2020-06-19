import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"

const ContactWrapper = styled.div`
  white-space: pre-wrap;
`

const ContactPage = ({ data }) => (
  <>
    <Helmet>
      <title>Falowanie - Kontakt</title>
    </Helmet>
    <ContactWrapper>
      <ReactMarkdown source={data.allDatoCmsKontakt.edges[0].node.tekst} />
    </ContactWrapper>
  </>
)

export const query = graphql`
  query ContacQuery {
    allDatoCmsKontakt {
      edges {
        node {
          tekst
        }
      }
    }
  }
`

export default ContactPage
