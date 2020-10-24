import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Techbox from "./techBox"
import TechboxHeader from "./techBoxHeader"
import TechboxFooter from "./techBoxFooter"

const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const BoxContainer = styled.div`
  width: 960px;
  display: flex;
  flex-wrap: wrap;
`

const Tech = () => {
  const data = useStaticQuery(graphql`
    query tech {
      allPrismicTech(
        sort: { fields: [data___order_number], order: [ASC, DESC] }
      ) {
        edges {
          node {
            id
            data {
              hover_text {
                text
              }
              logo {
                alt
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <TechContainer>
      <BoxContainer>
        <TechboxHeader />

        {data.allPrismicTech.edges.map(({ node }, i) => (
          <Techbox
            imageSrc={node.data.logo.url}
            alt={node.data.logo.alt}
            hoverText={node.data.hover_text.text}
            key={node.data.hover_text.text}
          />
        ))}
        {/* <a href="https://github.com/iamjmitch" target="_blank"> */}
        <TechboxFooter />
        {/* </a> */}
      </BoxContainer>
    </TechContainer>
  )
}

export default Tech
