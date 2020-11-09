import React, { useEffect, useState } from "react"
import styled from "styled-components"

import Button from "./button"

import HeroVideoMp4 from "../video/hero.mp4"
import HeroVideoWebm from "../video/hero.webm"
import HeroImageJPG from "../images/mobileHero.jpg"
import HeroImageWEBP from "../images/mobileHero.webp"

const HeroContainer = styled.div`
  height: 100vh;
  z-index: -1000;
  overflow: hidden;
`

const HeroImage = styled.img`
  min-width: 100%;
  min-height: 100%;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`

const Video = styled.video`
  min-width: 100%;
  min-height: 100%;
  z-index: -1000;
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000e0;
  width: 100%;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  z-index: 1000;

  @media (max-width: 600px) {
    background-color: #000000b5;
  }
`

const HeroContent = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
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
      padding: 0;
    }
  }
  h3 {
    font-size: 1.9em;
    font-weight: 500;
    padding-top: 20px;
    .mobileOnly {
      display: none;
      @media (max-width: 600px) {
        display: block;
      }
    }
    b {
      color: #fc2602;
    }
  }

  @media (max-width: 600px) {
    text-align: center;
    font-size: 12px;
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
            I CREATE STREAMLINED
            <br className="mobileOnly" />
            <b> WEB EXPERIENCES</b>
          </h3>
          <Button text="SEE MY WORK" />
        </HeroContent>
      </Span>
      <HeroImage src={HeroImageJPG} alt="Image of laptop" />
      <Video autoPlay loop muted>
        <source src={HeroVideoWebm} type="video/webm" />
        <source src={HeroVideoMp4} type="video/mp4" />
      </Video>
    </HeroContainer>
  )
}

export default Hero
