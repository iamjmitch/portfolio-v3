import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/logo.svg"

import Twitter from "../images/twitter.svg"
import Linkedin from "../images/linkedin.svg"
import Github from "../images/github.svg"

const StyledNav = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  background: #000000f5;
  transition: 0.5s;
  transform: translateX(${props => (props.isActive ? "0%" : "100%")});
  .linkContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1055px) {
    .linkContainer {
      flex-direction: column;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    svg {
      margin-bottom: 150px;
      width: 10vw;
      min-width: 200px;
      height: auto;
      @media (max-height: 900px) {
        margin-bottom: 70px;
      }
      @media (max-height: 390px) {
        display: none;
      }
    }
  }

  .icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    @media (max-height: 900px) {
      margin-top: 70px;
    }
    @media (max-height: 500px) {
      display: none;
    }
    a {
      &.orange {
        &:hover {
          svg path {
            transition: 0.5s ease;
            fill: white;
          }
        }
      }
      &.white {
        &:hover {
          svg path {
            transition: 0.5s ease;
            fill: #fc2606;
          }
        }
      }
      svg {
        width: 40px;
        height: auto;
        min-width: unset;
        display: block;
        margin: 5px 20px;
        transition: 0.5s ease;
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  transition: 0.2s ease;
  margin: 0 30px;
  text-transform: uppercase;
  line-height: 2rem;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  &.orange {
    color: #fc2602;
    transition: 0.5s ease;
    &:hover {
      border-bottom: 2px solid white;
    }
  }
  &.white {
    color: white;
    transition: 0.5s ease;
    &:hover {
      border-bottom: 2px solid #fc2602;
    }
  }

  @media (max-width: 1055px) {
    padding: 10px 0;
  }
`

const StyledNavButton = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  min-width: 35px;
  min-height: 35px;
  background: ${props => (props.isActive ? "white" : "transparent")};
  border-radius: 50%;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
  div {
    height: 3px;
    width: 60%;
    background: ${props => (!props.isActive ? "white" : "#fc2602")};
    margin: 2px 0;
  }

  .one {
    transition: 0.5s;
    transform: ${props =>
      props.isActive
        ? "rotate(45deg) translateX(5px) translateY(5px)"
        : "rotate(0deg)"};
  }
  .two {
    transition: 0.5s;
    transform: translateX(${props => (props.isActive ? "300%" : "0%")});
  }
  .three {
    transition: 0.5s;
    transform: ${props =>
      props.isActive
        ? "rotate(-45deg) translateX(5px) translateY(-5px)"
        : "rotate(0deg)"};
  }
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  align-items: center;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
`

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  return (
    <nav>
      <NavContainer>
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <StyledNavButton onClick={handleToggle} isActive={isActive}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </StyledNavButton>
        <StyledNav isActive={isActive}>
          <div className="container">
            <div className="linkContainer">
              <StyledLink className="orange" onClick={handleToggle} to="/">
                Home
              </StyledLink>
              <StyledLink
                className="white"
                onClick={handleToggle}
                to="/#skills"
              >
                Skills
              </StyledLink>
              <StyledLink
                className="orange"
                onClick={handleToggle}
                to="/#works"
              >
                Portfolio
              </StyledLink>
              <StyledLink className="white" onClick={handleToggle} to="/#about">
                About Me
              </StyledLink>
              <StyledLink
                className="orange"
                onClick={handleToggle}
                to="/#contact"
              >
                Contact Me
              </StyledLink>
            </div>
            <div className="icons">
              <a
                className="orange"
                href="https://twitter.com/iamjmitch"
                rel="noreferrer"
                target="_blank"
              >
                <Twitter />
              </a>
              <a
                href="https://www.linkedin.com/in/james-mitchell-a91057150/"
                target="_blank"
                rel="noreferrer"
                className="orange"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/iamjmitch"
                target="_blank"
                rel="noreferrer"
                className="orange"
              >
                <Github />
              </a>
            </div>
          </div>
        </StyledNav>
      </NavContainer>
    </nav>
  )
}

export default Navbar
