import React from "react"
// import { Link } from "gatsby"
import "../styles/index.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Who from "../components/who"
import Tech from "../components/technologies/technologies"
import Portfolio from "../components/portfolio/portfolio"
import Contact from "../components/contact"

const indexPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Who />
        <Tech />
        <Portfolio />
        <Contact act="https://www.flexyform.com/f/54d3643e2be164a1f6bc534b8721d3ae6a2f34c3" />
      </Layout>
    </div>
  )
}

export default indexPage
