import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react"
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
  min-width: 300px;
  @media (max-width: 1280px) {
    width: 42%;
    margin: 5px;
  }
  @media (max-width: 634px) {
    width: 100%;
    margin: 5px;
  }
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

  @media (max-width: 800px) {
    margin: 5px;
    .text {
      font-size: 0.9rem !important;
    }
    .title {
      font-size: 1.1rem !important;
    }
  }
  @media (max-width: 600px) {
    width: 100%;

    .text {
      font-size: 1rem !important;
    }
    .title {
      font-size: 1.3rem !important;
    }
  }
`

const Portfoliobox = props => {
  const imgRef = useRef(null)
  const imgContainerRef = useRef(null)
  const [marginAdjust, setMarginAdjust] = useState("1px")
  const [transSpeed, setTransSpeed] = useState("0.7s")

  function triggerSlide() {
    if (imgRef !== null && imgContainerRef !== null) {
      let imgHeight = imgRef.current.clientHeight
      let viewHeight = imgContainerRef.current.clientHeight
      let marginAdj = viewHeight - imgHeight
      setMarginAdjust(`${marginAdj}px`)
      setTransSpeed("0.7s")
    }
  }

  function returnSlide() {
    setMarginAdjust("1px")
    setTransSpeed("0.2s")
    console.log("here3")
  }

  // useLayoutEffect(() => {
  //   if (imgRef.current) {
  //     setImageHeight(imgRef.current.offsetHeight)
  //   }
  //   if (imgContainerRef.current) {
  //     setImageContainerHeight(imgContainerRef.current.offsetHeight)
  //     console.log(imgContainerRef)
  //   }
  //   setMarginAdjust(imgContainerHeight - imgHeight)
  // }, [imgRef, imgContainerRef])

  return (
    <BoxContainer data-sal="slide-up" data-sal-easing="ease">
      <ImageContainer
        backgroundC={props.backgroundC}
        onMouseEnter={triggerSlide}
        onMouseLeave={returnSlide}
        marginAdjust={marginAdjust}
        transSpeed={transSpeed}
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
