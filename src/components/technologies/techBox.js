import React from "react"
import styled from "styled-components"

const BoxContainer = styled.div`
  padding: 10px;
  width: 120px;
  height: 120px;
  box-sizing: content-box;
  cursor: pointer;
  &:hover div {
    // background: #fc2602;
    border-radius: 50%;
    p {
      opacity: 1;
    }
    img {
      opacity: 0;
    }
  }
`

const Box = styled.div`
  background: #151515;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  transition: 0.2s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  p {
    max-width: 120px;
    color: #fc2602;
    font-size: 1rem;
    font-weight: 500;
    position: absolute;
    transition: all 0.2s linear;
    text-align: center;
    line-height: 1.2rem;
    padding: 0 10px;

    opacity: 0;
  }
  img {
    min-width: 50%;
    max-width: 55%;
    max-height: 55%;
    transition: all 0.2s linear;
  }
`

const TechBox = props => {
  return (
    <BoxContainer>
      <Box>
        <img src={props.imageSrc} alt={props.alt} />
        <p>{props.hoverText}</p>
      </Box>
    </BoxContainer>
  )
}

export default TechBox
