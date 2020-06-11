import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

const NavigationWrapper = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
font-size: 1.6em;
font-family: 'Cormorant Garamond', sans-serif;
padding: 1.5em 3em;
`;

const Logo = styled.span`

font-size: 2em;
font-weight: 900;
padding: 0;
margin: 0;
cursor: pointer;

`;

const NavigationList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
display: flex;

li{
margin-left: 3em;
font-weight: 600;
cursor: pointer;
}
`;


const Navigation = () => {
    return (
        <NavigationWrapper>
            <Logo>FALOWANIE</Logo>
            <NavigationList>
                <li><Link to='/about'>o mnie</Link></li>
                <li><Link to='/articles'>lirycznie</Link></li>
                <li><Link to='/contact'>kontakt</Link></li>
                <li><Link to='https://www.instagram.com/lacri.mae/'><span className="fab fa-instagram"></span></Link></li>
            </NavigationList>
        </NavigationWrapper>
    );
};

export default Navigation;