import React from "react";
import {graphql} from "gatsby";
import styled from "styled-components";


const ContactWrapper = styled.div`
white-space: pre-wrap;

`;


const ContactPage = ({data}) => (

    <>
        <ContactWrapper>{data.allDatoCmsKontakt.edges[0].node.tekst}</ContactWrapper>
    </>

);

export const query = graphql`
query ContacQuery{
  allDatoCmsKontakt {
    edges {
      node {
        tekst
      }
    }
  }
}


`;

export default ContactPage;