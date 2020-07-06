import React from 'react'
import {connect, styled} from 'frontity'

import Link from '../partials/link'
import SocialLink from './social-link'

const Footer = ({state, theme}) => {
  const options = state.source.get('acf-options-page')
  const logo = options.acf.logos.light

  const {name} = (state.source.get('nameAndDescription'))

  return (
    <StyledFooter theme={theme}>
      <div>

        <Row theme={theme}>
          <div>
            <h2>Let's Connect</h2>

            <SocialLinkContainer>
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

            <input type="text" placeholder="Email" /><button>Sign up</button>
          </div>
        </Row>

        <FinePrint theme={theme}>
          <div>
            <address>
              {options.acf.address.street_number} {options.acf.address.street_name}, {options.acf.address.city}, {options.acf.address.state_short} | <span dangerouslySetInnerHTML={{__html:name}} /> | Copyright 2020 {/* TODO auto-update this year value */}
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

  color: ${props => props.theme.colors.light};

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


  }
`

const Row = styled.div`
  display: flex;
  padding: 5rem 1rem;
  width: 100%;
  flex-wrap: wrap;
  
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
      }

      input {
        outline: none;
        border: 1px solid ${props => props.theme.colors.light};
        background: rgba(255, 255, 255, 0.1);
        padding: 0.375rem;
        font-size: 0.75rem;

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
        font-size: 0.75rem;
        padding: 0.375rem;
        border: 1px solid ${props => props.theme.colors.light};
        text-transform: uppercase;
        vertical-align: bottom;

        transition: all 0.125s ease-in-out;

        &:hover {
          color: ${props => props.theme.colors.light};
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
  div {
    display: inline-block;

    &:nth-of-type(1) a {
      padding-left: 0;
    }

    a:before {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`

const FinePrint = styled.div`
  display: flex;
  padding: 0.25rem 0;
  border-top: 1px solid ${props => props.theme.colors.light};

  ${props => props.theme.breakPoints.mobile} {
    flex-direction: column;
    border: none;
  }

  &:before {
    content: "";
    display: block;
    height: 1px;
    width: 75%;
    margin: 0 auto 1rem;
    background: ${props => props.theme.colors.light};
  }

  div {
    width: 50%;
    font-size: 0.57rem;

    ${props => props.theme.breakPoints.mobile} {
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