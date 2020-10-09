import React from "react"
import styled from "styled-components"

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 0;
  form {
    width: 400px;
    div {
      display: flex;
      flex-direction: column;
      label {
        color: #fc2602;
        text-transform: uppercase;
      }
      input,
      textarea {
        background: #151515;
        border: none;
        padding: 3px 8px;
        color: white;
        text-transform: capitalize;
      }
    }
  }
`

const ContactForm = props => {
  return (
    <FormContainer>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label>Name*</label>
          <input type="text" name="fullname" required />
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
          <textarea name="message" rows="5" required></textarea>
        </div>
        <ul className="actions">
          <li>
            <button type="submit" className="button special">
              Send
            </button>
          </li>
        </ul>
      </form>
    </FormContainer>
  )
}

export default ContactForm
