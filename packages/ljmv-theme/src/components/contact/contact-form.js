import React from 'react'
import {connect, styled} from 'frontity'

const ContactForm = ({section, theme, libraries}) => {
  const Html2React = libraries.html2react.Component

  return (
    <ContactFormSection theme={theme}>
      <hr />
    
      <div>
        <h2>{section.title}</h2>

        <div>
          <Html2React html={section.text} />
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
      display: none;
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
    }
  }
`