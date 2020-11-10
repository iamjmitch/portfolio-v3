import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import GatsbyLogo from "../images/gatsbyLogo.svg"
import IamjmitchLogo from "../images/logo.svg"
import PrismicLogo from "../images/prismic.svg"

const StyledFooter = styled.div`
  padding: 30px 0;
  color: white;
  font-family: "Poppins", sans-serif;
`

const SubText = styled.p`
  font-size: 0.7rem;
  text-align: center;
  opacity: 0.6;
  padding: 0 20px;
  a {
    text-decoration: none;
    color: white;
  }
`
const FooterLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  font-weight: 500;
  @media (max-width: 781px) {
    .notTablet {
      display: none;
    }
  }
  @media (max-width: 520px) {
    .notMobile {
      display: none;
    }
  }
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 0 30px;
  opacity: 0.6;
  p {
    font-size: 0.7rem;
    font-weight: 500;
    padding-bottom: 3px;
  }
  svg {
    width: 200px;
    max-height: 35px;
    display: block;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogos>
        <LogoContainer>
          <p>DESIGNED AND DEVLOPED BY</p>
          <IamjmitchLogo />
        </LogoContainer>
        <LogoContainer className="notMobile">
          <p>BUILT WITH</p>
          <GatsbyLogo />
        </LogoContainer>
        <LogoContainer className="notMobile notTablet">
          <p>MANAGED WITH</p>
          <PrismicLogo />
        </LogoContainer>
      </FooterLogos>
      <SubText>COPYRIGHT © 2020 JAMES MITCHELL</SubText>
      <SubText>
        “Bitmoji Sticker” USED UNDER “PERSONAL USE” LICENCE. CREATE YOURS{" "}
        <a href="https://www.bitmoji.com/" target="_blank" rel="noreferrer">
          HERE
        </a>
      </SubText>
    </StyledFooter>
  )
}

export default Footer
