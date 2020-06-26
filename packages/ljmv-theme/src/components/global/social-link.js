import React from 'react'
import {connect, styled} from 'frontity'

import facebook from '../../icons/facebook.svg'
import google from '../../icons/google.svg'
import instagram from '../../icons/instagram.svg'
import tripadvisor from '../../icons/tripadvisor.svg'
import yelp from '../../icons/yelp.svg'

const NavLink = ({href, children, theme, network}) => {
  let icon
  switch(network) {
    case 'facebook':
      icon = facebook
      break
    case 'google_my_business':
      icon = google
      break
    case 'instagram':
      icon = instagram
      break
    case 'tripadvisor':
      icon = tripadvisor
      break
    case 'yelp':
      icon = yelp
      break
  }

  return(
    <div>
      <Anchor theme={theme} href={href} icon={`url(${icon})`} target="_blank">
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