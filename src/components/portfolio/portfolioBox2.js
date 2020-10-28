import React from "react"
import styled from "styled-components"

const BoxContainer = styled.div`
  max-width: 600px;
  margin: 20px;
  background: #262626;

  img {
    width: 100%;
    transition: 0.5s ease;
    &:hover {
      opacity: 0.5;
    }
  }
`

const TextContainer = styled.div`
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
      opacity: 0.5;
    }
  }
  .text {
    color: white;
    font-size: 1rem;
  }
`

const Portfoliobox = props => {
  return (
    <BoxContainer>
      <div className="imageContainer">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={props.imageSrc} alt={`${props.websiteTitle} screenshot`} />
        </a>
      </div>
      <TextContainer>
        <a href={props.link} target="_blank" rel="noreferrer">
          <h5 className="title">{props.websiteTitle}</h5>
        </a>
        <p className="text">{props.blurb}</p>
      </TextContainer>
    </BoxContainer>
  )
}

export default Portfoliobox
