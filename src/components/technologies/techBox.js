import React, { useState } from "react"
import styled from "styled-components"

const BoxContainer = styled.div`
  padding: 10px;
  width: 120px;
  height: 120px;
  box-sizing: content-box;
  cursor: pointer;
  &:hover div {
    background: #fc2602;
    border-radius: 50%;
  }
`

const Box = styled.div`
  background: #151515;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  transition: all 0.1s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  p {
    color: white;
    font-size: 1rem;
    font-weight: 500;
    position: absolute;
    transition: all 0.2s linear;
    text-align: center;
  }
  img {
    min-width: 50%;
    max-width: 50%;
    max-height: 60%;
    transition: all 0.2s linear;
  }
`

const TechBox = props => {
  const [hover, setHover] = useState(false)
  return (
    <BoxContainer
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box>
        <img
          style={!hover ? { opacity: "1" } : { opacity: "0" }}
          src={props.imageSrc}
          alt={props.alt}
        />
        <p style={!hover ? { opacity: "0" } : { opacity: "1" }}>
          {props.hoverText}
        </p>
      </Box>
    </BoxContainer>
  )
}

export default TechBox
