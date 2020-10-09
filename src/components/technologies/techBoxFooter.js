import React from "react"
import styled from "styled-components"

const Box = styled.div`
  background: #fc2602;
  position: relative;
  width: 120px;
  height: 120px;

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
    &.bigger {
      font-size: 2rem;
      font-weight: 600;
      line-height: 2rem;
      padding-top: 10px;
    }
  }
`

const TechBoxFooter = props => {
  return (
    <Box>
      <p>Repos on github</p>
      <p className="bigger">23</p>
      {/* this to be api call to github */}
    </Box>
  )
}

export default TechBoxFooter
