import React from "react"
import { Link } from "gatsby"
import "../styles/index.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Who from "../components/who"
import Tech from "../components/technologies"

const indexPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Who />
        <Tech />
      </Layout>
    </div>
  )
}

export default indexPage
