import React from "react"
import styled from "styled-components"

import AvatarSrc from "../images/avatar.png"

const Who = styled.div`
  width: 100%;
  background: #151515;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AvatarContainer = styled.div`
  background: #ff1212;
  width: 100px;
  height: 100px;
  overflow: hidden;
  display: flex;
  border-radius: 50%;
  padding: 10px 10px 0 10px;
`

const Avatar = styled.img`
  min-width: 100%;
  max-height: auto;
  object-fit: contain;
  transform: rotate(-5deg);

  margin-left: -5px;
`

const AvatarText = styled.div`
  text-align: center;
  font-family: "Poppins", sans-serif;
  max-width: 80%;
  h4 {
    color: #ff1212;
    padding: 25px 0 10px;
    font-weight: 600;
  }
  p {
    color: white;
    font-weight: 400;
  }
  .spaced {
    padding-bottom: 10px;
  }
`

const who = () => {
  return (
    <Who>
      <AvatarContainer>
        <Avatar src={AvatarSrc} />
      </AvatarContainer>
      <AvatarText>
        <h4>WHO ON EARTH IS THIS GUY?</h4>
        <p className="spaced">
          I’m James and im a Junior Web Developer from Brisbane, Australia.
        </p>
        <p>
          Most of my projects have been porfolio peices along with a few
          commercial ones. <br></br> I am eager to learn and ready to further
          advance my knowledge
        </p>
      </AvatarText>
    </Who>
  )
}
export default who
