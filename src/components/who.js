import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const WhoContainer = styled.div`
  width: 100%;
  background: none;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    height: 100vh;
  }
`

const AvatarContainer = styled.div`
  background: #ff1212;
  min-width: 130px;
  width: 12vh;
  height: 12vh;
  min-height: 130px;
  overflow: hidden;
  display: flex;
  border-radius: 50%;
  padding: 10px 10px 0 10px;
`

const Avatar = styled.img`
  min-width: 100%;
  max-height: auto;
  object-fit: contain;
  transform: rotate(-5deg);

  margin-left: -5px;
`

const AvatarText = styled.div`
  text-align: center;
  font-family: "Poppins", sans-serif;
  max-width: 80%;
  h4 {
    color: #ff1212;
    padding: 25px 0 10px;
    font-weight: 600;
  }
  p {
    color: white;
    font-weight: 400;
    white-space: pre-wrap;
  }
`

const Who = () => {
  const data = useStaticQuery(graphql`
    query blurb {
      allPrismicAboutBlurb {
        edges {
          node {
            data {
              blurb_heading {
                text
              }
              blurb {
                text
              }
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `)

  const heading =
    data.allPrismicAboutBlurb.edges[0].node.data.blurb_heading.text
  const avatarURL = data.allPrismicAboutBlurb.edges[0].node.data.avatar.url
  const blurb = data.allPrismicAboutBlurb.edges[0].node.data.blurb.text

  return (
    <WhoContainer id="about">
      <AvatarContainer data-sal="slide-left" data-sal-easing="ease">
        <Avatar className="lazyload" data-src={avatarURL} alt="Avatar" />
      </AvatarContainer>
      <AvatarText data-sal="slide-right" data-sal-easing="ease">
        <h4>{heading}</h4>
        <p> {blurb}</p>
      </AvatarText>
    </WhoContainer>
  )
}
export default Who
