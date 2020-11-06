import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "../images/logo.svg"

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: black;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
  padding-bottom: 15px;
`

const Header = () => {
  return (
    <NavContainer>
      <Link to="/">
        <Logo style={{ marginTop: "15px" }} />
      </Link>
    </NavContainer>
  )
}

export default Header
