import React, { useState } from "react"
import styled from "styled-components"

const Box = styled.div`
  background: #fc2602;
  position: relative;
  width: 213px;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin: 10px;

  p {
    display: block;
    padding: 0 10px;
    color: white;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.2s linear;
    line-height: 1rem;
    width: 100%;
    text-align: center;
    line-height: 1.3rem;
  }
`

const portfolioBoxFooter = props => {
  return (
    <Box>
      <p>
        click here <br></br> for the full <br></br> library of my <br></br>
        creations
      </p>
    </Box>
  )
}

export default portfolioBoxFooter
