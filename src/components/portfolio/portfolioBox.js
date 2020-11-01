import React from "react"
import styled from "styled-components"

const BoxContainer = styled.div`
  max-width: 600px;
  width: 45%;
  margin: 10px;
  background: ${props => props.backgroundC};

  img {
    width: 100%;
    transition: 0.5s ease;
    &:hover {
      opacity: 0.5;
    }
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
    margin: 10px 20px;
    .text {
      font-size: 1rem !important;
    }
    .title {
      font-size: 1.3rem !important;
    }
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 0;
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
  console.log(props.backgroundC)
  return (
    <BoxContainer backgroundC={props.backgroundC}>
      <div className="imageContainer">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={props.imageSrc} alt={`${props.websiteTitle} screenshot`} />
        </a>
      </div>
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
