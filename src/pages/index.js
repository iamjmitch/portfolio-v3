import React from "react"
import { Link } from "gatsby"
import "../styles/index.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Who from "../components/who"

const indexPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Who />
      </Layout>
    </div>
  )
}

export default indexPage
