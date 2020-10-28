import React from "react"
import styled from "styled-components"

const Button = styled.button`
  background: #fc2602;
  color: white;
  min-width: 50px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 20px;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  cursor: pointer;
  z-index: 999;
  align-self: center;
  transition: all 0.5s;
  text-transform: uppercase;
  &:hover {
    color: #fc2602;
    box-shadow: inset 200px 0px 9px 0px rgb(255 255 255);
  }
  @media (max-width: 500px) {
    font-size: 1.3rem;
    padding: 10px 10px;
  }
`

const button = props => {
  return <Button>{props.text}</Button>
}
export default button
