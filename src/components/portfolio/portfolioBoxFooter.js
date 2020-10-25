import React from "react"
import styled from "styled-components"

const Box = styled.div`
  background: transparent;
  border: 2px solid #fc2602;
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin: 10px;
  transition: 0.3s;
  &:hover {
    border-radius: 50%;
    // background: #fc2602;
    p {
      transform: rotate(0);
    }
  }

  p {
    display: block;
    padding: 0 10px;
    color: white;
    font-size: 1.5rem;
    font-weight: 500;
    transition: all 0.2s linear;
    transform: rotate(-45deg);
    width: 100%;
    text-align: center;
    line-height: 2rem;
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

const PortfolioBoxFooter = props => {
  return (
    <Box>
      <p>see the full library of my creations</p>
    </Box>
  )
}

export default PortfolioBoxFooter
