import React from 'react'
import {connect, styled} from 'frontity'

import Link from '../partials/link'
import NavLink from './nav-link'
import SocialLink from './social-link'

const Header = ({state, theme}) => {
  const options = state.source.get('acf-options-page')
  const lightLogo = true // TODO REPLACE THIS WITH SELECTOR ON PAGE
  const logo = lightLogo ? options.acf.logos.light : options.acf.logos.dark

  const {name} = (state.source.get('nameAndDescription'))

  return (
    <StyledHeader theme={theme}>
      <div>
        <Link href="/">{ logo ? <img src={logo.url} alt={name}/> : <h1 dangerouslySetInnerHTML={{__html:name}} /> }</Link>

        <nav>
          <NavLink href="/" theme={theme}>Welcome</NavLink>
          <NavLink href="/menus/" theme={theme}>Menus</NavLink>
          <NavLink href="/about-us/" theme={theme}>About Us</NavLink>
          <NavLink href="/contact-us/" theme={theme}>Contact Us</NavLink>

          {Object.keys(options.acf.social_media).map((keyName, keyIndex) => 
            <SocialLink key={keyIndex} network={keyName} href={options.acf.social_media[keyName]} theme={theme}>{keyName.replace(/_/g, ' ')}</SocialLink>
          )}
        </nav>
      </div>
    </StyledHeader>
  )
}

export default connect(Header)

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.primary};

  > div {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    img {
      max-height: 3rem;
    }

    nav {
      display: flex;
    }
  }
`