import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.div``
const FooterLogos = styled.div``
const LogoContainer = styled.div``

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogos>
        <LogoContainer>
          <p>DESIGNED AND DEVLOPED BY</p>
          <img src={iamjmitchLogo} />
        </LogoContainer>
        <LogoContainer>
          <p>CODED IN</p>
          <img src={gatsbyLogo} />
        </LogoContainer>
      </FooterLogos>
    </StyledFooter>
  )
}

export default Footer
