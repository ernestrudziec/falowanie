import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`

display: flex;
justify-content: center;
align-items: center;
color: #151515;
font-size: 1em;
padding: 1.5em 3em;
opacity: 0.5;
`;

const Footer = () => {
    return (
        <StyledFooter>
       Falowanie 2020 | autor: Paulina Ulatowska | Wszystkie prawa zastrzeżone 	&copy;
        </StyledFooter>
    );
};

export default Footer;