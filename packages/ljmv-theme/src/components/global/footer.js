import React from 'react'
import {connect, styled} from 'frontity'

import MailchimpSubscribe from "react-mailchimp-subscribe"

import Link from '../partials/link'
import SocialLink from './social-link'

const SubscriptionForm = ({theme, status, message, onValidated}) => {
  let email

  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    })

  return (
    <FormGroup theme={theme}>
      <input type="email" placeholder="Email" ref={node => (email = node)} />
      
      <button onClick={submit}>Sign up</button>

      {status === "sending" && <SendingCard theme={theme}>Sending...</SendingCard>}

      {status === "error" && <ErrorCard theme={theme} dangerouslySetInnerHTML={{__html: message}}/>}

      {status === "success" && <SuccessCard theme={theme}>You've been subscribed!</SuccessCard>}
    </FormGroup>
  )
}

const Footer = ({state, theme}) => {
  const options = state.source.get('acf-options-page')
  const logo = options.acf.logos.light

  const {name} = (state.source.get('nameAndDescription'))

  const url = "//lindajeansrestaurantmv.us17.list-manage.com/subscribe/post?u=79e568a05bc6f668789b780b7&amp;id=7cfff080c5"

  return (
    <StyledFooter theme={theme}>
      <div>
        <Row theme={theme}>
          <div>
            <h2>Let's Connect</h2>

            <SocialLinkContainer theme={theme}>
              {Object.keys(options.acf.social_media).map((keyName, keyIndex) => 
                <SocialLink key={keyIndex} network={keyName} href={options.acf.social_media[keyName]} theme={theme} selectedTheme='light'>{keyName.replace(/_/g, ' ')}</SocialLink>
              )}
            </SocialLinkContainer>

            <p>Follow us on social media to stay updated</p>
          </div>

          <div>
            <Link href="/">{ logo ? <img src={logo.url} alt={name}/> : <h1 dangerouslySetInnerHTML={{__html:name}} /> }</Link>
          </div>

          <div>
            <div>
              <h2>Stay In Touch</h2>
            </div>

            {/* <input type="text" placeholder="Email" /><button>Sign up</button> */}
            
            <MailchimpSubscribe
              url={url}
              render={({subscribe, status, message}) => (
                <SubscriptionForm
                  theme={theme}
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
          </div>
        </Row>

        <FinePrint theme={theme}>
          <div>
            <address>
              {options.acf.address.street_number} {options.acf.address.street_name}, {options.acf.address.city}, {options.acf.address.state_short} | <span dangerouslySetInnerHTML={{__html:name}} /> | Copyright {new Date().getFullYear()} {/* TODO auto-update this year value */}
            </address>
          </div>

          <div>
            <small>
              WEBSITE: <a href="http://mvesna.com" target="_blank" rel="noopener noreferrer">Vesna.Design.Studio</a> & <a href="https://artlyticalmedia.com" target="_blank" rel="noopener noreferrer">Artlytical Media</a>
            </small>
          </div>
        </FinePrint>
      </div>
    </StyledFooter>
  )
}

export default connect(Footer)

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.primary};
  position: relative;
  padding-top: 3rem;
  overflow: hidden;

  color: ${props => props.theme.colors.light};

  ${props => props.theme.breakPoints.tablet} {
    padding-top: 0;
  }

  h2 {
    font-size: 1rem;

    &:after {
      border-color: ${props => props.theme.colors.secondary};
    }
  }

  > div {
    border-top: 1px solid ${props => props.theme.colors.light};

    max-width: 960px;
    margin: 0 auto;

    ${props => props.theme.breakPoints.tablet} {
      border-top: 0;
    }
  }
`

const Row = styled.div`
  display: flex;
  padding: 5rem 1rem;
  width: 100%;
  flex-wrap: wrap;

  ${props => props.theme.breakPoints.tablet} {
    padding: 3rem 1rem 2rem;
  }
  
  > div {
    width: 33%;

    &:nth-of-type(2) {
      text-align: center;

      img {
        max-height: 5rem;
      }
    }

    &:nth-of-type(3) {
      text-align: right;

      h2:after {
        margin-right: 0;
        margin-left: auto;

        ${props => props.theme.breakPoints.tablet} {
          margin-right: auto;
        }
      }
    }

    ${props => props.theme.breakPoints.tablet} {
      width: 100%;
      margin-bottom: 2rem;
      text-align: center !important;

      &:nth-of-type(1) {
        h2:after {
          margin: 0.5rem auto 0;
        }
      }

      p {
        max-width: 75%;
        font-size: 1rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }

    p {
      margin: 0.5rem auto 0;
      text-transform: none;
      font-style: italic;
      font-size: 0.8rem;
    }
  }
`

const SocialLinkContainer = styled.div`
  ${props => props.theme.breakPoints.mobile} {
    margin: 2rem 0;
  }

  div {
    display: inline-block;

    a {
      ${props => props.theme.breakPoints.mobile} {
        padding: 1.25rem;
      }
    }

    &:nth-of-type(1) a {
      padding-left: 0;
    }

    &:last-of-type a {
      padding-right: 0;
    }

    a:before {
      height: 1.5rem;
      width: 1.5rem;

      ${props => props.theme.breakPoints.mobile} {
        height: 2rem;
        width: 2rem;
      }
    }
  }
`

const FinePrint = styled.div`
  display: flex;
  padding: 0.25rem 0;
  border-top: 1px solid ${props => props.theme.colors.light};

  ${props => props.theme.breakPoints.tablet} {
    flex-direction: column;
    border: none;

    &:before {
      content: "";
      display: block;
      height: 1px;
      width: 75%;
      margin: 0 auto 1rem;
      background: ${props => props.theme.colors.light};
    }
  }

  div {
    width: 50%;
    font-size: 0.57rem;

    ${props => props.theme.breakPoints.tablet} {
      width: 75%;
      margin: 0 auto 0.5rem;

      &, small {
        text-align: center !important;
      }
    }

    address {
      font-style: normal;
      text-transform: uppercase;
    }

    small {
      display: block;
      font-size: 0.57rem;
      text-align: right;

      a {
        color: ${props => props.theme.colors.light};
      }
    }
  }
`

const FormGroup = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: end;

  ${props => props.theme.breakPoints.mobile} {
    justify-content: center;
  }

  input {
    outline: none;
    border: 1px solid ${props => props.theme.colors.light};
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    font-size: 1rem;
    line-height: 1;
    color: ${props => props.theme.colors.light};
    height: 3rem;
    width: 12rem;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props => props.theme.colors.light};
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props => props.theme.colors.light};
    }

    ::-ms-input-placeholder {
      color: ${props => props.theme.colors.light};
    }
  }

  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${props => props.theme.colors.light};
    text-transform: uppercase;
    vertical-align: bottom;
    line-height: 1;
    letter-spacing: 1px;
    height: 3rem;
    border-left: none;

    transition: all 0.125s ease-in-out;

    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.light};
    }
  }
`

const SendingCard = styled.div`
  ${props => props.theme.cards.base}

  margin-top: 1rem;
`

const ErrorCard = styled.div`
  ${props => props.theme.cards.base}
  ${props => props.theme.cards.failure}

  margin-top: 1rem;

  a {
    color: ${props => props.theme.colors.failure};
  }
`

const SuccessCard = styled.div`
  ${props => props.theme.cards.base}
  ${props => props.theme.cards.success}

  margin-top: 1rem;

  a {
    color: ${props => props.theme.colors.success};
  }
`