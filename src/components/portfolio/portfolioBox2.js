import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import laptop from "../../images/laptop.png"

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #262626;
  max-width: 600px;
  position: relative;
  cursor: pointer;
  margin: 20px;
`

const ImageContainer = styled.div`
  width: 100%;
  background: ${props => props.backgroundC};
  padding: 20px;
  .buffer {
    width: 80%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .laptopImg {
    width: 100%;
    height: auto;
    z-index: 1;
    position: relative;
  }
  .innerImgContainer {
    background: black;
    width: 76%;
    height: 86%;
    position: absolute;
    top: 4%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    overflow: hidden;
  }
  .innerImg {
    width: 100%;
    min-height: 100%;
    margin-top: ${props => props.marginAdjust};
    transition: ${props => props.transSpeed} linear;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 10px;
  a {
    text-decoration: none;
  }
  .title {
    transition: 0.5s ease;
    color: #fc2602;
    font-size: 1.3rem;
    font-weight: 600;
    &:hover {
      color: white;
    }
  }
  .line {
    width: 30px;
    height: 1px;
    background: #fc2602;
    margin-bottom: 5px;
  }
  .text {
    color: white;
    font-size: 1rem;
  }
`

const Portfoliobox = props => {
  const imgRef = useRef(null)
  const imgContainerRef = useRef(null)
  const [imgHeight, setImageHeight] = useState(null)
  const [imgContainerHeight, setImageContainerHeight] = useState(null)
  const [marginAdjust, setMarginAdjust] = useState("1px")
  const [transSpeed, setTransSpeed] = useState("0.7s")

  useEffect(() => {
    if (imgRef.current) {
      setImageHeight(imgRef.current.clientHeight)
      console.log(imgRef.current.clientHeight)
    }
    if (imgContainerRef.current) {
      setImageContainerHeight(imgContainerRef.current.clientHeight)
    }
    setMarginAdjust(imgContainerHeight - imgHeight)
  }, [imgRef, imgContainerRef])

  return (
    <BoxContainer>
      <ImageContainer
        backgroundC={props.backgroundC}
        onMouseOver={() => {
          setTransSpeed("0.7s")
          setMarginAdjust(`${imgContainerHeight - imgHeight}px`)
        }}
        transSpeed={transSpeed}
        onMouseLeave={() => {
          setTransSpeed("0.2s")
          setMarginAdjust("1px")
        }}
        marginAdjust={marginAdjust}
      >
        <div className="buffer">
          <div className="innerImgContainer" ref={imgContainerRef}>
            <img
              className="innerImg"
              src={props.imageSrc}
              alt={`${props.websiteTitle} screenshot`}
              ref={imgRef}
            />
          </div>
          <img className="laptopImg" src={laptop} alt="Image of a laptop" />
        </div>
      </ImageContainer>
      <TextContainer>
        <a href={props.link} target="_blank" rel="noreferrer">
          <h4 className="title">{props.websiteTitle}</h4>
        </a>
        <div className="line"></div>
        <p className="text">{props.blurb}</p>
      </TextContainer>
    </BoxContainer>
  )
}

export default Portfoliobox
