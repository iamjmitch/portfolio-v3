import React from "react"
import styled from "styled-components"

import Button from "./button"

import HeroVideoMp4 from "../video/hero.mp4"
import HeroVideoWebm from "../video/hero.webm"

const HeroContainer = styled.div`
  height: 100vh;
  z-index: -1000;
  overflow: hidden;
`

const Video = styled.video`
  min-width: 100%;
  min-height: 100%;
  z-index: -1000;
`

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000e0;
  width: 100%;
  min-height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  z-index: 1000;
`

const HeroContent = styled.div`
  text-align: left;
  h1 {
    font-size: 5em;
    line-height: 76px;

  }
  h2 {
    font-size: 3.5em;
    line-height: 65px;
    padding-top: 10px;
    b {
      color: #fc2602;
    }
  }
  h3{
    font-size: 1.9em;
    font-weight: 500;
    padding-top: 20px;
    b {
      color: #fc2602;
    }
`

const Hero = () => {
  return (
    <HeroContainer>
      <Span>
        <HeroContent>
          <h1>HELLO,</h1>
          <h2>
            MY NAME IS <b>JAMES</b>
          </h2>
          <h3>
            I'M A JUNIOR <b>FRONT-END DEVELOPER</b>
          </h3>
          <Button text="SEE MY WORK" />
        </HeroContent>
      </Span>
      <Video autoPlay loop muted>
        <source src={HeroVideoWebm} type="video/webm" />
        <source src={HeroVideoMp4} type="video/mp4" />
      </Video>
    </HeroContainer>
  )
}

export default Hero
