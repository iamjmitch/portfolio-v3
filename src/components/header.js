import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "../images/logo.svg"
import Hamburger from "../images/hamburger.svg"

const NavContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  background: transparent;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
`

const Header = () => {
  return (
    <NavContainer>
      <Link to="/">
        <Logo />
      </Link>
      <Hamburger />
    </NavContainer>
  )
}

export default Header
