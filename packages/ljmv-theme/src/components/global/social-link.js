import React from 'react'
import {connect, styled, css} from 'frontity'

import facebook from '../../icons/facebook.svg'
import google from '../../icons/google.svg'
import instagram from '../../icons/instagram.svg'
import tripadvisor from '../../icons/tripadvisor.svg'
import yelp from '../../icons/yelp.svg'
import facebookPrimary from '../../icons/facebook-primary.svg'
import googlePrimary from '../../icons/google-primary.svg'
import instagramPrimary from '../../icons/instagram-primary.svg'
import tripadvisorPrimary from '../../icons/tripadvisor-primary.svg'
import yelpPrimary from '../../icons/yelp-primary.svg'

const NavLink = ({href, children, theme, network, selectedTheme}) => {
  let icon
  switch(network) {
    case 'facebook':
      icon = selectedTheme === 'light' ? facebook : facebookPrimary
      break
    case 'google_my_business':
      icon = selectedTheme === 'light' ? google : googlePrimary
      break
    case 'instagram':
      icon = selectedTheme === 'light' ? instagram : instagramPrimary
      break
    case 'tripadvisor':
      icon = selectedTheme === 'light' ? tripadvisor : tripadvisorPrimary
      break
    case 'yelp':
      icon = selectedTheme === 'light' ? yelp : yelpPrimary
      break
  }

  return(
    <div css={css`
      ${theme.breakPoints.navbar} {
        flex-basis: 20%;
        display: inline-block;
      }
    `}>
      <Anchor theme={theme} href={href} icon={`url(${icon})`} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
      </Anchor>
    </div>
  )
}

export default connect(NavLink)

const Anchor = styled.a`
  padding: 1rem;

  span {
    visibility: hidden;
    position: absolute;
  }

  &:before {
    content: "";
    display: inline-block;
    height: 1rem;
    width: 1rem;
    background-image: ${props => props.icon};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    background-size: contain;
  }
`