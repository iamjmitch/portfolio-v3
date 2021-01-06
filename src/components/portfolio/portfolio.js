import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"

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

const Button = styled.button`
  background: #fc2602;
  color: white;
  min-width: 50px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 20px;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  cursor: pointer;
  z-index: 999;
  align-self: center;
  transition: all 0.5s;
  text-transform: uppercase;
  &:hover {
    color: #fc2602;
    box-shadow: inset 200px 0px 9px 0px rgb(255 255 255);
  }
  @media (max-width: 500px) {
    font-size: 1.3rem;
    padding: 10px 10px;
  }
`

const Portfolio = () => {
  // will only pull data for entires marked "featured=true"
  const data = useStaticQuery(graphql`
    query portfolio {
      allPrismicPortfolioPiece(
        sort: { fields: data___featured_position, order: ASC }
      ) {
        edges {
          node {
            data {
              website_featured
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

  const [isToggle, setIsToggle] = useState(false)

  const handleClick = () => {
    setIsToggle(true)
    console.log(isToggle)
  }

  return (
    <PortfolioContainer id="works">
      <h3 data-sal="slide-left" data-sal-easing="ease" data-sal-delay="200">
        My Works
      </h3>
      <h5 data-sal="slide-right" data-sal-easing="ease" data-sal-delay="200">
        {isToggle === false && "Favourites"}
        {isToggle === true && "All"}
      </h5>
      <BoxContainer>
        {data.allPrismicPortfolioPiece.edges.map(({ node }, i) => {
          if (node.data.website_featured === true) {
            //initially only shows website tagged as featured in prismic
            return (
              <Portfoliobox
                key={node.data.website_name.text}
                imageSrc={node.data.website_image.url}
                websiteTitle={node.data.website_name.text}
                blurb={node.data.website_blurb.text}
                link={node.data.website_link.url}
                backgroundC={node.data.backgroundcolor}
              />
            )
          } else if (
            node.data.website_featured === false &&
            isToggle === true
          ) {
            return (
              //shows all portfolio pieces
              <Portfoliobox
                key={node.data.website_name.text}
                imageSrc={node.data.website_image.url}
                websiteTitle={node.data.website_name.text}
                blurb={node.data.website_blurb.text}
                link={node.data.website_link.url}
                backgroundC={node.data.backgroundcolor}
              />
            )
          }
        })}
      </BoxContainer>
      {isToggle === false && (
        <Button onClick={handleClick}>See All Works</Button>
      )}
    </PortfolioContainer>
  )
}

export default Portfolio
