import React, {useState, useEffect} from 'react'
import {connect, styled} from 'frontity'

import { slide as Menu } from 'react-burger-menu'
import ScrollToTop from 'react-scroll-to-top'
import disableScroll from 'disable-scroll'

import Link from '../partials/link'
import NavLink from './nav-link'
import SocialLink from './social-link'
import Container from '../partials/container'

import scrollToTopIcon from '../../icons/icon-scrolltotop.svg'

const NavigationLinks = ({socialMedia, theme, selectedTheme}) => (
  <StyledNav theme={theme}>
    <NavLink href="/" theme={theme} selectedTheme={selectedTheme}>Welcome</NavLink>
    <NavLink href="/menus/" theme={theme} selectedTheme={selectedTheme}>Menus</NavLink>
    <NavLink href="/about-us/" theme={theme} selectedTheme={selectedTheme}>About</NavLink>
    <NavLink href="/contact-us/" theme={theme} selectedTheme={selectedTheme}>Contact</NavLink>

    <SocialMediaLinks theme={theme}>
      {Object.keys(socialMedia).map((keyName, keyIndex) => 
        <SocialLink key={keyIndex} network={keyName} href={socialMedia[keyName]} theme={theme} selectedTheme={selectedTheme}>{keyName.replace(/_/g, ' ')}</SocialLink>
      )}
    </SocialMediaLinks>
  </StyledNav>
)

const Header = ({state, theme, selectedTheme}) => {
  const options = state.source.get('acf-options-page')
  const lightLogo = selectedTheme === 'light' ? true : false
  const logo = lightLogo ? options.acf.logos.light : options.acf.logos.dark
  const [isMenuOpen, toggleMenu] = useState(false)

  const {name} = (state.source.get('nameAndDescription'))

  const menuStyles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '2.15rem',
      height: '1.85rem',
      right: '1.625rem',
      top: '1.625rem'
    },
    bmBurgerBars: {
      background: selectedTheme === 'light' ? theme.colors.light : theme.colors.primary,
      borderRadius: '1rem',
      height: '15%'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      right: '1.625rem'
    },
    bmCross: {
      background: theme.colors.light,
      height: '24px',
      width: '4px'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: theme.colors.primary,
      padding: '1em 0',
      fontSize: '1.15em'
    },
    bmItemList: {
      color: theme.colors.light,
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  useEffect(() => {
    disableScroll.off()
  }, [])

  const handleOnOpen = () => {
    disableScroll.on()
    toggleMenu(true)
  }

  const handleOnClose = () => {
    disableScroll.off()
    toggleMenu(false)
  }

  return (
    <>
      <ScrollToTop smooth component={<ScrollToTopIcon />} style={{backgroundColor: 'transparent', boxShadow: 'none', width: '2rem', height: '2rem'}} />

      <StyledHeader theme={theme}>
        <StyledContainer>
          <NavBarContainer theme={theme}>
            <Link href="/">{ logo ? <img src={logo.url} alt={name}/> : <h1 dangerouslySetInnerHTML={{__html:name}} /> }</Link>

            <DesktopNavigation theme={theme}>
              <NavigationLinks socialMedia={options.acf.social_media} theme={theme} selectedTheme={selectedTheme} />
            </DesktopNavigation>

            <MobileNavigation theme={theme}>
              <Menu isOpen={isMenuOpen} right styles={menuStyles} width={'90%'} onOpen={handleOnOpen} onClose={handleOnClose}>
                <NavigationLinks socialMedia={options.acf.social_media} theme={theme} selectedTheme='light' />
              </Menu>
            </MobileNavigation>
          </NavBarContainer>
        </StyledContainer>
      </StyledHeader>
    </>
  )
}

export default connect(Header)

const ScrollToTopIcon = styled.div`
  width: 2rem;
  padding-bottom: 2rem;

  background-image: url(${scrollToTopIcon});
  background-repeat: none;
  background-size: 100%;
  background-size: contain;
  background-position: center;
`

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  img {
    max-height: 5.5rem;
    padding: 0 1rem;

    ${props => props.theme.breakPoints.mobile} {
      max-height: 4rem;
    }
  }
`

const StyledContainer = styled(Container)`
  padding: 0;
`

const MobileNavigation = styled.div`
  display: none;

  ${props => props.theme.breakPoints.navbar} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 36px;
    height: 36px;
    font-size: 2rem;
    
    a {
      display: inline-block;
    }
  }
`

const DesktopNavigation = styled.div`
  ${props => props.theme.breakPoints.navbar} {
    display: none;
  }
`

const StyledNav = styled.nav`
  display: flex;

  ${props => props.theme.breakPoints.navbar} {
    text-align: center;
    flex-direction: column;
  }
`

const SocialMediaLinks = styled.div`
  display: flex;
`