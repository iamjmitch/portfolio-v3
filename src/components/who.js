import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import AvatarSrc from "../images/avatar.png"

const WhoContainer = styled.div`
  width: 100%;
  background: #151515;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AvatarContainer = styled.div`
  background: #ff1212;
  width: 100px;
  height: 100px;
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
        nodes {
          data {
            avatar {
              url
            }
            blurb {
              text
            }
            burb_heading {
              text
            }
          }
        }
      }
    }
  `)

  const heading = data.allPrismicAboutBlurb.nodes[0].data.burb_heading[0].text
  const avatarURL = data.allPrismicAboutBlurb.nodes[0].data.avatar.url
  const blurb = data.allPrismicAboutBlurb.nodes[0].data.blurb[0].text

  return (
    <WhoContainer>
      <AvatarContainer>
        <Avatar src={avatarURL} alt="Avatar" />
      </AvatarContainer>
      <AvatarText>
        <h4>{heading}</h4>
        <p> {blurb}</p>
      </AvatarText>
    </WhoContainer>
  )
}
export default Who
