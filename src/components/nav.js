import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNav = styled.div`
  height: 100vh;
  width: 20vw;
  min-width: 250px;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  background: #fc2602;
  border-left: solid 5px white;
  transition: 0.5s;
  transform: translateX(${props => (props.isActive ? "0%" : "100%")});
  @media (max-width: 500px) {
    width: 100vw;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  transition: 0.5s ease-in;
  padding: 10px 0;
  &:hover {
    color: #0b0a0a;
    transform: scale(1.2);
  }
`

const StyledNavButton = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  min-width: 35px;
  min-height: 35px;
  background: ${props => (props.isActive ? "white" : "#fc2602")};
  border-radius: 50%;
  position: fixed;
  right: 25px;
  top: 7px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
  div {
    height: 4px;
    width: 60%;
    background: ${props => (!props.isActive ? "white" : "#fc2602")};
    margin: 2px 0;
  }

  .one {
    transition: 0.5s;
    transform: ${props =>
      props.isActive
        ? "rotate(45deg) translateX(6px) translateY(6px)"
        : "rotate(0deg)"};
  }
  .two {
    transition: 0.5s;
    transform: translateX(${props => (props.isActive ? "200%" : "0%")});
  }
  .three {
    transition: 0.5s;
    transform: ${props =>
      props.isActive
        ? "rotate(-45deg) translateX(5px) translateY(-5px)"
        : "rotate(0deg)"};
  }
`

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  return (
    <nav>
      <StyledNavButton onClick={handleToggle} isActive={isActive}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </StyledNavButton>
      <StyledNav isActive={isActive}>
        <StyledLink onClick={handleToggle} to="/">
          Home
        </StyledLink>
        <StyledLink onClick={handleToggle} to="/#skills">
          Skills
        </StyledLink>
        <StyledLink onClick={handleToggle} to="/creations">
          Portfolio
        </StyledLink>
        <StyledLink onClick={handleToggle} to="/#about">
          About Me
        </StyledLink>
        <StyledLink onClick={handleToggle} to="/#contact">
          Contact Me
        </StyledLink>
      </StyledNav>
    </nav>
  )
}

export default Navbar
