import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Portfoliobox from "./portfolioBox"
import PortfolioboxHeader from "./portfolioBoxHeader"
import PortfolioboxFooter from "./portfolioBoxFooter"
import { getSupportInfo } from "prettier"

const PortfolioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background: #151515;
`

const BoxContainer = styled.div`
  width: 700px;
  display: flex;
  flex-wrap: wrap;
`

const portfolio = () => {
  return (
    <PortfolioContainer>
      <BoxContainer>
        <PortfolioboxHeader />
        <Portfoliobox
          imageSrc="https://i.ibb.co/R3PWgSk/Untitled-1-1.png"
          websiteTitle="Andratech"
          blurb="A Landing Page For A Local Business"
          link="https://andratech-landing.iamjmitch.com/"
        />
        <Portfoliobox
          imageSrc="https://i.ibb.co/R3PWgSk/Untitled-1-1.png"
          websiteTitle="Andratech"
          blurb="A Landing Page For A Local Business"
          link="https://andratech-landing.iamjmitch.com/"
        />
        <Portfoliobox
          imageSrc="https://i.ibb.co/R3PWgSk/Untitled-1-1.png"
          websiteTitle="Andratech"
          blurb="A Landing Page For A Local Business"
          link="https://andratech-landing.iamjmitch.com/"
        />
        <Portfoliobox
          imageSrc="https://i.ibb.co/R3PWgSk/Untitled-1-1.png"
          websiteTitle="Andratech"
          blurb="A Landing Page For A Local Business"
          link="https://andratech-landing.iamjmitch.com/"
        />

        <Link to="/creations" style={{ textDecoration: "none" }}>
          <PortfolioboxFooter />
        </Link>
      </BoxContainer>
    </PortfolioContainer>
  )
}

export default portfolio
