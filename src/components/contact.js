import React, { useState } from "react"
import styled from "styled-components"
import slideOut from "../images/slide-out.png"
const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  max-width: 400px;
  margin: 0 auto;
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
        bottom: 35px;
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
        background: #151515;
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
          bottom: 60px;
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
        &:hover {
          color: #fc2602;
          box-shadow: inset 200px 0px 9px 0px rgb(255 255 255);
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
`

const ContactForm = props => {
  const [formSent, setFormSent] = useState(false)
  const handleSubmit = event => {
    event.preventDefault()
    let contactForm = document.querySelector("#contactForm")
    const formData = new FormData(contactForm)
    fetch(contactForm.getAttribute("action"), {
      method: "POST",
      headers: {
        Accept: "application/x-www-form-urlencoded;charset=UTF-8",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams(formData).toString(),
    }).then(res => {
      if (res) {
        setFormSent(true)
        contactForm.reset()
        setTimeout(function () {
          setFormSent(false)
        }, 5000)
      }
    })
  }

  return (
    <FormContainer>
      <Heading>
        <h4>CONTACT ME</h4>
        <h5>* REQUIRED FIELDS</h5>
      </Heading>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        action="/"
        id="contactForm"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label>Name*</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email*</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Phone</label>
          <input type="phone" name="phone" />
        </div>
        <div>
          <label>Message*</label>
          <textarea name="message" rows="10" required></textarea>
          <span>
            <SlideoutImage src={slideOut} />
          </span>
        </div>
        <ul className="actions">
          <li>
            <button type="submit" className="button">
              {!formSent ? "SEND" : "MESSAGE SENT!"}
            </button>
          </li>
        </ul>
      </form>
    </FormContainer>
  )
}

export default ContactForm
