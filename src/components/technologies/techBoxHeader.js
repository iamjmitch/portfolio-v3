import React from "react"
import styled from "styled-components"

const Box = styled.div`
  background: rgb(21 21 21);
  border: 2px solid #fa2906;
  position: relative;
  width: 140px;
  height: 140px;

  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin: 10px;

  p {
    display: block;
    padding: 15px;
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.3rem;
    position: absolute;
    transition: all 0.2s linear;
    width: 100%;
    text-align: center;
    transform: rotate(-45deg);
  }
  @media (max-width: 479px) {
    width: 100px;
    height: 100px;
    margin: 3px;
  }
`

const TechBoxHeader = props => {
  return (
    <Box>
      <p>
        My<br></br>Stack
      </p>
    </Box>
  )
}

export default TechBoxHeader
