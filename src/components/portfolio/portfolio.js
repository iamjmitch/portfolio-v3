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
          websiteTitle="Placeholder"
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing."
          link="#"
        />
        <Portfoliobox
          imageSrc="https://magcentre.com/wp-content/uploads/2017/06/how-to-create-a-website-feature-image-e1496943224192.jpg"
          websiteTitle="Placeholder"
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing."
          link="#"
        />
        <Portfoliobox
          imageSrc="https://magcentre.com/wp-content/uploads/2017/06/how-to-create-a-website-feature-image-e1496943224192.jpg"
          websiteTitle="Placeholder"
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing."
          link="#"
        />
        <Portfoliobox
          imageSrc="https://magcentre.com/wp-content/uploads/2017/06/how-to-create-a-website-feature-image-e1496943224192.jpg"
          websiteTitle="Placeholder"
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing."
          link="#"
        />

        <Link to="/creations" style={{ textDecoration: "none" }}>
          <PortfolioboxFooter />
        </Link>
      </BoxContainer>
    </PortfolioContainer>
  )
}

export default portfolio
