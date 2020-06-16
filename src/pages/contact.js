import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

const ContactWrapper = styled.div`
  white-space: pre-wrap;
`

const ContactPage = ({ data }) => (
  <>
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
