import React, { useState } from "react"
import styled from "styled-components"

const Box = styled.div`
  background: #262626;
  border: 2px solid #262626;
  position: relative;
  width: 300px;
  height: 300px;
  transition: all 0.1s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background: #262626;
    border: 2px solid #fc2602;
    padding: 0;
    img {
      transform: scale(1.1);
    }
  }
  img {
    width: 100%;
    transition: all 0.2s linear;
  }

  @media (max-width: 639px) {
    width: 46vw;
    height: auto;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`

const Websitebox = styled.div`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  position: absolute;
  transition: all 0.2s linear;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  color: white;
  text-align: center;
  padding: 10px;
  h5 {
    font-weight: 600;
    color: #fc2602;
  }
  P {
    font-size: 0.85rem;
    text-transform: capitalize;
    padding: 15px 0;
  }
  button {
    background: #fc2602;
    color: white;
    border: 1px solid white;
    padding: 5px 20px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: #fc2602;
      box-shadow: inset 200px 0px 9px 0px rgb(255 255 255);
      border: 1px solid white;
    }
  }
`

const WebsiteBlurb = props => {
  return (
    <Websitebox style={!props.hover ? { opacity: "0" } : { opacity: "1" }}>
      <h5>{props.websiteTitle}</h5>
      <p>{props.blurb}</p>
      <a href={props.link} rel="noreferrer" target="_blank">
        <button>Visit Site</button>
      </a>
    </Websitebox>
  )
}
const PortfolioBox = props => {
  const [hover, setHover] = useState(false)
  return (
    <Box
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        style={!hover ? { opacity: "1" } : { opacity: "0" }}
        src={props.imageSrc}
        alt="website"
      />
      <WebsiteBlurb
        websiteTitle={props.websiteTitle}
        blurb={props.blurb}
        link={props.link}
        hover={hover}
      ></WebsiteBlurb>
    </Box>
  )
}

export default PortfolioBox
