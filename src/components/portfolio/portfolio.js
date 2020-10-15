import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Portfoliobox from "./portfolioBox"
import PortfolioboxHeader from "./portfolioBoxHeader"
import PortfolioboxFooter from "./portfolioBoxFooter"

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
          imageSrc="https://magcentre.com/wp-content/uploads/2017/06/how-to-create-a-website-feature-image-e1496943224192.jpg"
          websiteTitle="Andratech"
          blurb="A Landing Page For A Local Business"
          link="https://andratech-landing.iamjmitch.com/"
        />
        <Portfoliobox
          imageSrc="https://magcentre.com/wp-content/uploads/2017/06/how-to-create-a-website-feature-image-e1496943224192.jpg"
          websiteTitle="Andratech"
          blurb="A Landing Page For A Local Business"
          link="https://andratech-landing.iamjmitch.com/"
        />
        <Portfoliobox
          imageSrc="https://magcentre.com/wp-content/uploads/2017/06/how-to-create-a-website-feature-image-e1496943224192.jpg"
          websiteTitle="Andratech"
          blurb="A Landing Page For A Local Business"
          link="https://andratech-landing.iamjmitch.com/"
        />
        <Portfoliobox
          imageSrc="https://magcentre.com/wp-content/uploads/2017/06/how-to-create-a-website-feature-image-e1496943224192.jpg"
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
