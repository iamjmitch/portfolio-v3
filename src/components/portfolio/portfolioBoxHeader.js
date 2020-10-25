import React from "react"
import styled from "styled-components"

const Box = styled.div`
  background: transparent;
  border: 2px solid #fc2602;
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin: 10px;
  p {
    display: block;
    padding: 10px;
    color: white;
    font-size: 1.5rem;
    font-weight: 500;
    position: absolute;
    transition: all 0.2s linear;
    width: 100%;
    text-align: center;
    line-height: 2rem;
    transform: rotate(-45deg);
    @media (max-width: 639px) {
      transform: none;
    }
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

const portfolioBoxHeader = props => {
  return (
    <Box>
      <p>
        FAVOURITE<br></br> CREATIONS
      </p>
    </Box>
  )
}

export default portfolioBoxHeader
