import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery } from "gatsby"

import Portfoliobox from "./portfolioBox"
import PortfolioboxHeader from "./portfolioBoxHeader"
import PortfolioboxFooter from "./portfolioBoxFooter"

const PortfolioContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background: #151515;
  @media (max-width: 500px) {
    padding: 20px 0;
  }
`

const BoxContainer = styled.div`
  width: 960px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  .link {
    @media (max-width: 500px) {
      padding: 10px;
    }
  }
`

const Portfolio = () => {
  // will only pull data for entires marked "featured=true"
  const data = useStaticQuery(graphql`
    query portfolio {
      allPrismicPortfolioPiece(
        filter: { data: { website_featured: { eq: true } } }
        sort: { fields: data___featured_position, order: ASC }
      ) {
        edges {
          node {
            data {
              featured_position
              website_blurb {
                text
              }
              website_image {
                url
              }
              website_link {
                url
              }
              website_name {
                text
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <PortfolioContainer>
      <BoxContainer>
        <PortfolioboxHeader />

        {data.allPrismicPortfolioPiece.edges.map(({ node }, i) => (
          <Portfoliobox
            imageSrc={node.data.website_image.url}
            websiteTitle={node.data.website_name.text}
            blurb={node.data.website_blurb.text}
            link={node.data.website_link.url}
          />
        ))}

        <Link
          className="link"
          to="/creations"
          style={{ textDecoration: "none" }}
        >
          <PortfolioboxFooter />
        </Link>
      </BoxContainer>
    </PortfolioContainer>
  )
}

export default Portfolio
