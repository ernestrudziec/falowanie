import Navigation from "../components/Navigation/Navigation"
import React from "react"

import styled from "styled-components"
import Footer from "../components/Footer"
import "./index.css"
import { Helmet } from "react-helmet"
import favicon from "../assets/favicon/favicon.ico"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: #e9e5dd;
`
const MainLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/165b719f88.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Wrapper>
        <Navigation />
        <div>{children}</div>
        <Footer />
      </Wrapper>
    </>
  )
}

export default MainLayout
