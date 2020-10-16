import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import axios from "axios"

const BoxContainer = styled.div`
  padding: 10px;
  width: 120px;
  height: 120px;
  box-sizing: content-box;
  cursor: pointer;
  transition: 0.3s;
  &:hover div {
    // background: #fc2602;
    border-radius: 50%;
    span.onHover {
      opacity: 1;
    }
    span.noHover {
      opacity: 0;
    }
  }
  span.onHover {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    line-height: 2rem;
  }
  span.noHover {
    transition: 0.3s;
    line-height: 2rem;
  }
  a {
    text-decoration: none;
  }
`

const Box = styled.div`
  background: #fc2602;
  position: relative;
  width: 120px;
  height: 120px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  transition: 0.3s;
  cursor: pointer;

  p {
    display: block;
    padding: 0 10px;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s linear;
    line-height: 1.2rem;
    width: 100%;
    text-align: center;
    &.bigger {
      font-size: 2rem;
      font-weight: 600;
      line-height: 2rem;
      padding-top: 10px;
      opacity: 1;
    }
  }
`

// This component technically renders the values twice. the useEffect checks Live github repo count and changes the output to the live value.
// repoCount is queried at gatsby build to create a layer of fallback incase the live .get fails and the staic value at build time is displayed unless overridden by the useEffect
const TechBoxFooter = () => {
  const [githubData, setGithubData] = useState({})

  // This will be called on component mount and provides live updating to the data
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

  //creates a static value of totalCount on gatsby build as a fall back if the live query fail and to also eliminate the no value for the few seconds it takes for the api call to return
  const repoCount = useStaticQuery(graphql`
    query {
      github {
        viewer {
          repositories(isFork: false) {
            totalCount
          }
        }
      }
    }
  `)

  return (
    <BoxContainer>
      <a href="https://github.com/iamjmitch" target="_blank" rel="noreferrer">
        <Box>
          <span className="onHover">
            <p>Visit My Github Page</p>
          </span>
          <span className="noHover">
            <p>Repos on github</p>
            <p className="bigger">
              {/* {if no live data exisits, show static build value} */}
              {!githubData.viewer &&
                repoCount.github.viewer.repositories.totalCount}
              {/* {if live data exisits, show live value} */}
              {githubData.viewer && githubData.viewer.repositories.totalCount}
            </p>
          </span>
        </Box>
      </a>
    </BoxContainer>
  )
}
export default TechBoxFooter
