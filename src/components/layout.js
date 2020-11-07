import React from "react"
import styled from "styled-components"
import Footer from "./footer"
import Nav from "../components/nav"

const PageLayout = styled.div`
  background: #0b0a0a;
  overflow: hidden;
  width: 100%;
`

const Layout = props => {
  return (
    <PageLayout style={{ minWidth: "350px" }}>
      <Nav />

      {props.children}
      <Footer />
    </PageLayout>
  )
}

export default Layout
