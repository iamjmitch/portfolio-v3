import React from "react"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"

const PageLayout = styled.div`
  background: #0b0a0a;
  overflow: hidden;
`

const Layout = props => {
  return (
    <PageLayout style={{ minWidth: "350px" }}>
      <Header />
      {props.children}
      <Footer />
    </PageLayout>
  )
}

export default Layout
