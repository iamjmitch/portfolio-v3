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
        <Tech />
        <Portfolio />
        <Who />
        <Contact />
      </Layout>
    </div>
  )
}

export default indexPage
