import { responsePathAsArray } from "graphql"
import React, { useState } from "react"
import styled from "styled-components"
import slideOut from "../images/slide-out.png"

const Container = styled.div`
  background: #151515;
`
const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  max-width: 500px;
  margin: 0 auto;
  @media (max-width: 540px) {
    padding: 100px 20px;
  }
  form {
    overflow: visible;
    position: relative;
    width: 100%;
    div {
      display: flex;
      flex-direction: column;
      span {
        position: absolute;
        transition: 0.4s;
        right: 0;
        bottom: 5px;
        z-index: 0;
      }
      label {
        color: #fc2602;
        margin: 10px 0 3px 0;
        text-transform: uppercase;
        font-size: 0.9rem;
      }
      input,
      textarea {
        background: #262626;
        border: none;
        padding: 3px 8px;
        color: white;
        text-transform: capitalize;
        resize: none;
        z-index: 1;
      }
      input[type="email"] {
        text-transform: lowercase;
      }
      textarea {
        &:focus + span {
          transform: translateX(100%);
          bottom: 30px;
        }
      }
    }
    li {
      list-style: none;
      div {
        background: #fc2602;
        margin: 10px 0;
        transition: 0.3s;
        p {
          color: white;
        }
      }
      button {
        background: #fc2602;
        color: white;
        min-width: 50px;
        border: none;
        font-size: 0.9rem;
        font-weight: 600;
        padding: 6px 30px;
        font-family: "Poppins", sans-serif;
        margin-top: 10px;
        cursor: pointer;
        z-index: 999;
        align-self: center;
        transition: all 0.5s;
        list-style: none;
        width: 100%;
        &:hover {
          color: #fc2602;
          box-shadow: inset 600px 0px 9px 0px rgb(255 255 255);
        }
        @media (max-width: 500px) {
          padding: 10px;
        }
      }
    }
  }
`

const Heading = styled.div`
  text-align: center;
  padding-bottom: 30px;
  h4 {
    color: #fc2602;
    font-size: 1.9rem;
    font-weight: 600;
  }
  h5 {
    color: #fff;
    font-size: 0.8rem;
    font-weight: 500;
  }
`

const SlideoutImage = styled.img`
  height: 130px;
  @media (max-width: 715px) {
    display: none;
  }
`

const ContactForm = props => {
  const [formText, setFormText] = useState("SEND")
  const [isBot, setIsBot] = useState(false)
  const handleSubmit = event => {
    event.preventDefault()
    setFormText("SENDING...")
    //get form
    let contactForm = document.querySelector("#contactForm")
    //get value of the message textbox
    let messageData = document.querySelector("#message").value
    //get value of the email input
    let inputtedEmail = document.querySelector("#email").value
    //get value of the honeypot question
    let honeyPVal = document.querySelector("#honey")
    const formData = new FormData(contactForm)

    //function to handle the sending of form on successful validation
    const handleSend = () => {
      fetch(contactForm.getAttribute("action"), {
        method: "POST",
        headers: {
          Accept: "application/x-www-form-urlencoded;charset=UTF-8",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams(formData).toString(),
      }).then(res => {
        if (res) {
          setTimeout(function () {
            setFormText("MESSAGE SENT")
          }, 2000)
          contactForm.reset()
          setTimeout(function () {
            setFormText("SEND")
          }, 7000)
        }
      })
    }

    if (
      //if the message box contains any sort of link to a website, validation will fail and ask to prove if human. Capture Question is image

      messageData.includes("http") ||
      messageData.includes(".com") ||
      messageData.includes("www.")
    ) {
      // triggers the initial bot check box
      if (!isBot) {
        setIsBot(true)
        setFormText("Please Prove You Are Human")
        // currently hard coded Question Answer. may make it slightly more challenging based on success rate of blocking bots
      } else if (
        inputtedEmail.includes("iamjmitch.com") ||
        messageData.includes("iamjmitch")
      ) {
        contactForm.reset()
        setTimeout(function () {
          setFormText("An Error Has Occured")
        }, 1000)
        contactForm.reset()
        setTimeout(function () {
          setFormText("SEND")
        }, 7000)
      } else if (honeyPVal.value === "4" || honeyPVal.value === 4) {
        handleSend()
      } else {
        setFormText("Try Again")
      }
    } else {
      if (inputtedEmail.includes("iamjmitch.com")) {
        setTimeout(function () {
          setFormText("ERROR, TRY AGAIN LATER")
        }, 2000)
      } else {
        handleSend()
      }
    }
  }

  return (
    <Container id="contact">
      <FormContainer>
        <Heading>
          <h4 data-sal="slide-left" data-sal-easing="ease" data-sal-delay="200">
            CONTACT ME
          </h4>
          <h5
            data-sal="slide-right"
            data-sal-easing="ease"
            data-sal-delay="200"
          >
            * REQUIRED FIELDS
          </h5>
        </Heading>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          data-netlify="true"
          name="contact"
          action="/"
          id="contactForm"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div
            data-sal="slide-right"
            data-sal-easing="ease"
            data-sal-delay="200"
          >
            <label htmlFor="name">Name*</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div
            data-sal="slide-left"
            data-sal-easing="ease"
            data-sal-delay="200"
          >
            <label htmlFor="email">Email*</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div
            data-sal="slide-right"
            data-sal-easing="ease"
            data-sal-delay="200"
          >
            <label htmlFor="phone">Phone</label>
            <input type="phone" name="phone" id="phone" />
          </div>
          <div
            data-sal="slide-left"
            data-sal-easing="ease"
            data-sal-delay="200"
            style={{ position: "relative" }}
          >
            <label htmlFor="message">Message*</label>
            <textarea name="message" rows="10" id="message" required></textarea>
            <span>
              <SlideoutImage className="lazyload" data-src={slideOut} />
            </span>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <ul className="actions">
            {isBot && (
              <li>
                <Container style={{ background: "transparent" }}>
                  <img
                    style={{
                      width: "63px",
                      paddingBottom: "5px",
                    }}
                    src="../captcha.png"
                  />
                  <input required type="text" id="honey" name="honey" />
                </Container>
              </li>
            )}
            <li>
              <button
                type="submit"
                className="button"
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-delay="200"
              >
                {formText}
              </button>
            </li>
          </ul>
        </form>
      </FormContainer>
    </Container>
  )
}

export default ContactForm
