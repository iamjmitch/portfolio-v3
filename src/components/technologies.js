import React from "react"
import styled from "styled-components"

import Techbox from "./techBox"
import svelteLogo from "../images/tech/svelte.svg"

const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`

const BoxContainer = styled.div`
  width: 850px;
  display: flex;
  flex-wrap: wrap;
`

const tech = () => {
  return (
    <TechContainer>
      <BoxContainer>
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://www.php.net/images/logos/new-php-logo.svg"
          hoverText="php"
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
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
        <Techbox
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          hoverText="Svelte"
        />
      </BoxContainer>
    </TechContainer>
  )
}

export default tech
