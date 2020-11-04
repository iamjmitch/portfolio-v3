import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery } from "gatsby"
import Button from "../button"

import Portfoliobox from "./portfolioBox"

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background: #151515;

  h3 {
    color: #fc2602;
    font-size: 1.9rem;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0;
    margin: 0;
  }
  h5 {
    color: #fff;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  @media (max-width: 500px) {
    padding: 20px 0;
  }
`

const BoxContainer = styled.div`
  max-width: 1300px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
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
              backgroundcolor
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <PortfolioContainer>
      <h3>My Works</h3>
      <h5>Favourites</h5>
      <BoxContainer>
        {data.allPrismicPortfolioPiece.edges.map(({ node }, i) => (
          <Portfoliobox
            key={node.data.website_name.text}
            imageSrc={node.data.website_image.url}
            websiteTitle={node.data.website_name.text}
            blurb={node.data.website_blurb.text}
            link={node.data.website_link.url}
            backgroundC={node.data.backgroundcolor}
          />
        ))}

        <Link
          className="link"
          to="/creations"
          style={{ textDecoration: "none" }}
        >
          {/* <PortfolioboxFooter /> */}
        </Link>
      </BoxContainer>
      <Button text="See All Works" />
    </PortfolioContainer>
  )
}

export default Portfolio
