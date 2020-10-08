import React, { useState } from "react"
import styled from "styled-components"

const Box = styled.div`
  background: #151515;
  position: relative;
  width: 120px;
  height: 120px;
  padding: 10px;
  transition: all 0.1s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background: #fc2602;
    border-radius: 50%;
  }
  p {
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    position: absolute;
    transition: all 0.2s linear;
  }
  img {
    width: 50%;
    transition: all 0.2s linear;
  }
`

const TechBox = props => {
  const [hover, setHover] = useState(false)
  return (
    <Box
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        style={!hover ? { opacity: "1" } : { opacity: "0" }}
        src={props.imageSrc}
      />
      <p style={!hover ? { opacity: "0" } : { opacity: "1" }}>
        {props.hoverText}
      </p>
    </Box>
  )
}

export default TechBox
