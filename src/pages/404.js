import React from "react"
import styled from "styled-components"
import Image404 from "../images/404.png"
import Footer from "../components/footer"
import Nav from "../components/nav"

const Container404 = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  padding-top: 65px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0b0a0a;
  overflow: hidden;
`

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    margin: 0 15px;
  }
  img {
    @media (max-width: 600px) {
      width: 40vw;
      height: auto;
    }
  }
  .textContainer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    background: transparent;
    border: 2px solid #fc2602;
    h1 {
      color: #fc2602;
      font-size: 6rem;
      text-align: center;
      padding: 0;
      line-height: 6rem;
    }
    h2 {
      color: #ffffff;
      text-align: center;
      font-size: 2rem;
      font-weight: 500;
      padding: 0;
      @media (max-width: 600px) {
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
    }
  }
`

const NotFoundPage = () => (
  <div>
    <Nav />
    <Container404>
      <Content>
        <img src={Image404} alt="404 error - page not found" />
        <div className="textContainer">
          <h1>404</h1>
          <h2>Page Not Found</h2>
        </div>
      </Content>
      <Footer />
    </Container404>
  </div>
)

export default NotFoundPage
