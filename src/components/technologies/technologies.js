import React from "react"
import styled from "styled-components"

import Techbox from "./techBox"
import TechboxHeader from "./techBoxHeader"
import TechboxFooter from "./techBoxFooter"

const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const BoxContainer = styled.div`
  width: 700px;
  display: flex;
  flex-wrap: wrap;
`

const tech = () => {
  return (
    <TechContainer>
      <BoxContainer>
        <TechboxHeader />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        {/* <a href="https://github.com/iamjmitch" target="_blank"> */}
        <TechboxFooter />
        {/* </a> */}
      </BoxContainer>
    </TechContainer>
  )
}

export default tech
