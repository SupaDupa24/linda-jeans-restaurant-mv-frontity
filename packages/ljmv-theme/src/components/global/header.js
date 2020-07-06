import React from 'react'
import {connect, styled} from 'frontity'

import Link from '../partials/link'
import NavLink from './nav-link'
import SocialLink from './social-link'

const Header = ({state, theme, selectedTheme}) => {
  const options = state.source.get('acf-options-page')
  const lightLogo = selectedTheme === 'light' ? true : false
  const logo = lightLogo ? options.acf.logos.light : options.acf.logos.dark

  const {name} = (state.source.get('nameAndDescription'))

  return (
    <StyledHeader theme={theme}>
      <div>
        <Link href="/">{ logo ? <img src={logo.url} alt={name}/> : <h1 dangerouslySetInnerHTML={{__html:name}} /> }</Link>

        <nav>
          <NavLink href="/" theme={theme} selectedTheme={selectedTheme}>Welcome</NavLink>
          <NavLink href="/menus/" theme={theme} selectedTheme={selectedTheme}>Menus</NavLink>
          <NavLink href="/about-us/" theme={theme} selectedTheme={selectedTheme}>About Us</NavLink>
          <NavLink href="/contact-us/" theme={theme} selectedTheme={selectedTheme}>Contact Us</NavLink>

          {Object.keys(options.acf.social_media).map((keyName, keyIndex) => 
            <SocialLink key={keyIndex} network={keyName} href={options.acf.social_media[keyName]} theme={theme} selectedTheme={selectedTheme}>{keyName.replace(/_/g, ' ')}</SocialLink>
          )}
        </nav>
      </div>
    </StyledHeader>
  )
}

export default connect(Header)

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  > div {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    img {
      max-height: 3rem;
      padding: 0 1rem;
    }

    nav {
      display: flex;
    }
  }
`