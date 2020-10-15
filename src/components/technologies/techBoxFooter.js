import React, { useState, useEffect } from "react"
import styled from "styled-components"

import axios from "axios"

const Box = styled.div`
  background: #fc2602;
  position: relative;
  width: 120px;
  height: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin: 10px;

  p {
    display: block;
    padding: 0 10px;
    color: white;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.2s linear;
    line-height: 1rem;
    width: 100%;
    text-align: center;
    &.bigger {
      font-size: 2rem;
      font-weight: 600;
      line-height: 2rem;
      padding-top: 10px;
    }
  }
`

const TechBoxFooter = () => {
  const [githubData, setGithubData] = useState({})
  // This will be called on component mount
  useEffect(() => {
    const githubUrl = "https://api.github.com/graphql"
    const token = process.env.GATSBY_GITHUB_ACCESS
    const oauth = { Authorization: "bearer " + token }
    const query = "{viewer{repositories(isFork: false) {totalCount}}}"
    axios
      .post(githubUrl, { query: query }, { headers: oauth })
      // This will set the res.data.data to the githubData state
      .then(res => setGithubData(res.data.data))
  }, [])
  // This will display the count if the data exists
  return (
    <Box>
      <p>Repos on github</p>
      <p className="bigger">
        {githubData.viewer && githubData.viewer.repositories.totalCount}
      </p>
    </Box>
  )
}
export default TechBoxFooter
