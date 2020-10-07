import React from "react"
import styled from "styled-components"

const Button = styled.button`
  background: #fc2602;
  color: white;
  min-width: 50px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 6px 20px;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  cursor: pointer;
  z-index: 999;
  align-self: center;
  transition: all 0.5s;
  &:hover {
    color: #fc2602;
    box-shadow: inset 200px 0px 9px 0px rgb(255 255 255);
  }
`

const button = props => {
  return <Button>{props.text}</Button>
}
export default button
