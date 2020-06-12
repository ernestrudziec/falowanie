import React, {useState} from 'react';
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

@media screen and (max-width: 700px){
justify-content: space-between;
padding: 1em;
}
`;

const Logo = styled.span`

font-size: 2em;
font-weight: 900;
padding: 0;
margin: 0;
cursor: pointer;

@media screen and (max-width: 700px){
font-size: 1.6em;
}
@media screen and (max-width: 500px){
font-size: 1em;
}

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

@media screen and (max-width: 1200px){

position: fixed;
left: 0;
right: 0;
top: 10%;
bottom: 0;
z-index: 955;
background:  #E9E5DD;

justify-content: center;
align-items: center;
flex-direction: column;
 display: ${({ open }) => open ? 'flex' : 'none'};


li{
margin: 1em 0;
}


}
`;

const Hamburger = styled.button`
display: none;
background: transparent;
border: none;
font-size: 1em;
outline: none;
cursor: pointer;

@media screen and (max-width: 1200px){
display: initial;
}

`;
const activeLink = {
    fontWeight: 700,
    textDecoration: 'underline'
};

const Navigation = () => {

    const [isNavOpened, setNav] = useState(false);

    return (
        <NavigationWrapper>
            <Logo><Link onClick={() => setNav(false)} to='/'>FALOWANIE</Link></Logo>
            <NavigationList open={isNavOpened}>
                <li ><Link activeStyle={activeLink} onClick={() => setNav(false)} to='/about'>o mnie</Link></li>
                <li ><Link activeStyle={activeLink} onClick={() => setNav(false)} to='/articles'>artykuły</Link></li>
                <li ><Link activeStyle={activeLink} onClick={() => setNav(false)} to='/contact'>kontakt</Link></li>
                <li ><Link activeStyle={activeLink} onClick={() => setNav(false)} to='https://www.instagram.com/lacri.mae/'><span className="fab fa-instagram"></span></Link></li>
            </NavigationList>
            <Hamburger onClick={() => setNav(!isNavOpened)}><span
                className="fa fa-bars"
                aria-hidden="true"></span></Hamburger>

        </NavigationWrapper>
    );
};

export default Navigation;