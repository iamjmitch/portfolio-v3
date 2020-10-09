import React from "react"
// import { Link } from "gatsby"
import "../styles/index.css"

import Layout from "../components/layout"

import Portfolio from "../components/portfolio/portfolio"

const indexPage = () => {
  return (
    <div>
      <Layout>
        <Portfolio />
      </Layout>
    </div>
  )
}

export default indexPage
