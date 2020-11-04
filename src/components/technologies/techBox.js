import React from "react"
import styled from "styled-components"

const BoxContainer = styled.div`
  padding: 10px;
  width: 140px;
  height: 140px;
  box-sizing: content-box;
  cursor: pointer;
  div {
    border: 2px solid #151515;
  }
  &:hover div {
    border: 2px solid #fa2906;
    border-radius: 50%;
    p {
      opacity: 1;
      color: white;
    }
    img {
      opacity: 0;
    }
  }
  @media (max-width: 479px) {
    width: 100px;
    height: 100px;
    padding: 3px;
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
  @media (max-width: 479px) {
    padding: 3px;
  }

  p {
    max-width: 172px;
    color: #fc2602;
    font-size: 1rem;
    font-weight: 500;
    position: absolute;
    transition: all 0.2s linear;
    text-align: center;
    line-height: 1.5rem;
    padding: 0 10px;
    opacity: 0;
    @media (max-width: 479px) {
      font-size: 0.85rem;
    }
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
    <BoxContainer
      data-sal="slide-up"
      data-sal-easing="ease"
      data-sal-delay="200"
    >
      <Box key={props.hoverText}>
        <img className="lazyload" data-src={props.imageSrc} alt={props.alt} />
        <p>{props.hoverText}</p>
      </Box>
    </BoxContainer>
  )
}

export default TechBox
