import React, { useState } from "react"
import styled from "styled-components"

const Box = styled.div`
  background: #fc2602;
  position: relative;
  width: 120px;
  height: 120px;

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
  }
`

const TechBoxHeader = props => {
  return (
    <Box>
      <p>
        Languages <br></br> & <br></br>Frameworks
      </p>
    </Box>
  )
}

export default TechBoxHeader
