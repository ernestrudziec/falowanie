import Navigation
    from "../components/Navigation/Navigation";
import React from "react";

import styled from "styled-components";
import Footer from "../components/Footer";
import "./index.css"
import { Helmet } from "react-helmet";

const Wrapper = styled.div`


display: flex;
justify-content: space-between;

align-items: center;

flex-direction: column;
min-height: 100vh;
width: 100%;


background: #E9E5DD;

`;
const MainLayout = ({children}) => {



    return(
    <>
        <Helmet>
            <script
                src="https://kit.fontawesome.com/165b719f88.js"
                crossOrigin="anonymous">
            </script>
        </Helmet>
        <Wrapper>

            <Navigation/>
            <div>
                {children}
            </div>
            <Footer/>
        </Wrapper>
    </>
    );
};

export default MainLayout;