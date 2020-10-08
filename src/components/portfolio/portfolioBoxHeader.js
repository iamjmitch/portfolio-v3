import React, { useState } from "react"
import styled from "styled-components"

const Box = styled.div`
  background: #fc2602;
  position: relative;
  width: 213px;
  height: 150px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin: 10px;
  p {
    display: block;
    padding: 10px;
    color: white;
    font-size: 0.85rem;
    font-weight: 500;
    position: absolute;
    transition: all 0.2s linear;
    width: 100%;
    text-align: center;
    line-height: 1.3rem;
  }
`

const portfolioBoxHeader = props => {
  return (
    <Box>
      <p>
        a few of<br></br> my favourite <br></br>creations
      </p>
    </Box>
  )
}

export default portfolioBoxHeader
