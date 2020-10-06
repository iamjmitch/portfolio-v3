import React from "react"

import styled from "styled-components"

const Button = styled.button`
  background: #fc2602;
  color: white;
  min-width: 50px;
  border: none;
  font-size: 0.8rem;
  padding: 5px 15px;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  cursor: pointer;
  z-index: 999;
`

const button = props => {
  return <Button>{props.text}</Button>
}

export default button
