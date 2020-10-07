import React, { useState } from "react"
import styled from "styled-components"

const Box = styled.div`
  background: #151515;
  position: relative;
  width: 150px;
  height: 150px;
  padding: 10px;
  transition: 0.3s;
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
    font-size: 1.5rem;
    font-weight: 500;
  }
  img {
    width: 50%;
  }
`

const TechBox = props => {
  const [hover, setHover] = useState(false)
  return (
    <Box
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={props.imageSrc} />
      {hover === true && <p>{props.hoverText}</p>}
    </Box>
  )
}

export default TechBox
