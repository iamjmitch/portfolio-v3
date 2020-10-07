import React from "react"
import styled from "styled-components"

import AvatarSrc from "../images/avatar.png"

const Who = styled.div`
  width: 100%;
  background: #151515;
`

const AvatarContainer = styled.div``

const Avatar = styled.img``

const AvatarText = styled.div``

const who = () => {
  return (
    <Who>
      <AvatarContainer>
        <Avatar src={AvatarSrc} />
      </AvatarContainer>
      <AvatarText>
        <h4>WHO ON EARTH IS THIS GUY?</h4>
        <p>I’m James and im a Junior Web Developer from Brisbane, Australia.</p>
        <p>
          Most of my projects have been porfolio peices along with a few
          commercial ones, I’m eager to learn and am ready to have my mind
          moulded.
        </p>
      </AvatarText>
    </Who>
  )
}
