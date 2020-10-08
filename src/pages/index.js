import React from "react"
import { Link } from "gatsby"
import "../styles/index.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Who from "../components/who"
import Tech from "../components/technologies/technologies"
import Portfolio from "../components/portfolio/portfolio"

const indexPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Who />
        <Tech />
        <Portfolio />
      </Layout>
    </div>
  )
}

export default indexPage
