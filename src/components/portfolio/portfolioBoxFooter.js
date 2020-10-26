import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Box = styled.div`
  background: #262626;
  border: 1px solid #fc2602;
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
    @media (max-width: 500px) {
      border-radius: 0;
      background: #fc2602;
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
    @media (max-width: 500px) {
      transform: none;
      font-size: 1rem;
    }
  }

  @media (max-width: 639px) {
    width: 42vw;
    height: 42vw;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: auto;
    padding: 10px;
    margin: 0;
  }
`

const PortfolioBoxFooter = props => {
  const [isMobile, setisMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth < 500) {
      setisMobile(true)
    } else {
      setisMobile(false)
    }
  }, [])
  return (
    <Box>
      <p>{isMobile ? "See More" : "see the full library of my creations"}</p>
    </Box>
  )
}

export default PortfolioBoxFooter
