import React from "react"
import { Link } from "gatsby"
import "../styles/index.css"

import Layout from "../components/layout"
import Hero from "../components/hero"

const indexPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
      </Layout>
      <p>Test</p>
    </div>
  )
}

export default indexPage
