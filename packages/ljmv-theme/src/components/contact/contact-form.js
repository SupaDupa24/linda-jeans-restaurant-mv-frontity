import React, {useRef} from 'react'
import {connect, styled} from 'frontity'
import emailjs from 'emailjs-com'

const ContactForm = ({section, theme, libraries}) => {
  const Html2React = libraries.html2react.Component
  const submitButton = useRef(null)
  const successCard = useRef(null)
  const failureCard = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault()

    successCard.current.style.display = 'none'
    failureCard.current.style.display = 'none'
    submitButton.current.disabled = true

    emailjs.sendForm('gmail', 'template_WVLlczVk', e.target, 'user_gSiDKqlpOdUiCVLVjxOWJ')
      .then((result) => {
        console.log(result.text)

        successCard.current.style.display = 'block'
      }, (error) => {
        console.error(error.text)

        failureCard.current.style.display = 'block'
      })
  }

  return (
    <ContactFormSection theme={theme}>
      <hr />
    
      <div>
        <h2>{section.title}</h2>

        <div>
          <Html2React html={section.text} />

          <form onSubmit={sendEmail}>
            <div>
              <label htmlFor="full_name">Name:</label>
              <input type="text" required name="full_name" placeholder="Name:" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" required name="email" placeholder="Email:" />
            </div>

            <div>
              <label htmlFor="subject">Subject:</label>
              <input type="text" name="subject" required placeholder="Subject:" />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" placeholder="Message:" />
            </div>

            <input ref={submitButton} type="submit" value="Send" />

            <SuccessCard theme={theme} ref={successCard}>
              <h3>Success!</h3>

              <p>We have received your email and will get back to you as soon as we can!</p>
            </SuccessCard>

            <FailureCard theme={theme} ref={failureCard}>
              <h3>Failure :-(</h3>

              <p>Oh no, something went wrong!  Please reach out to us via social media or phone to let us know that something is broken so we know to fix it, thanks.</p>
            </FailureCard>
          </form>
        </div>
      </div>
    </ContactFormSection>
  )
}

export default connect(ContactForm)

const ContactFormSection = styled.div`
  text-align: center;
  padding: 1rem 0;

  > div {
    width: 75%;
    margin: 0 auto;

    ${props => props.theme.breakPoints.mobile} {
      width: 100%;
    }
  }

  hr {
    padding-bottom: 2rem;
  }

  h2:after {
    margin-left: auto;
    margin-right: auto;
  }

  form {
    label {
      visibility: hidden;
      position: absolute;
    }

    div {
      margin: 2rem 0;
    }

    input[type="text"],
    input[type="email"],
    textarea {
      background: transparent;
      border: 1px solid ${props => props.theme.colors.primary};
      padding: 1.25rem 1.5rem;
      width: 100%;
      font-family: Trebuchet, sans-serif;
      font-size: 1rem;
    }

    input[type="submit"] {
      cursor: pointer;
      display: block;
      margin: 4rem 0 0 auto;
      padding: 1.25rem 2.5rem;
      text-transform: uppercase;
      font-family: Trebuchet, sans-serif;
      font-size: 1rem;

      font-weight: bold;
      border: 0;

      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.light};

      &:disabled {
        background: ${props => props.theme.colors.secondary};
      }
    }
  }
`
const SuccessCard = styled.div`
  display: none;

  ${props => props.theme.cards.base}

  ${props => props.theme.cards.success}
`

const FailureCard = styled.div`
  display: none;

  ${props => props.theme.cards.base}

  ${props => props.theme.cards.failure}
`