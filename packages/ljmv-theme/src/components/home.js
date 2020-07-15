import React, {useState} from 'react'
import {connect, styled, css} from 'frontity'
import Switch from '@frontity/components/switch'
import Modal from 'react-modal'

import SiteContent from './global/site-content'

import Header from './global/header'

import Link from './partials/link'

import Hero from './home/hero'
import Awards from './home/awards'
import About from './home/about'
import Menus from './home/menus'

import clockIcon from '../icons/icon-clock.svg'
import emailIcon from '../icons/icon-email.svg'
import phoneIcon from '../icons/icon-phone.svg'
import mapIcon from '../icons/icon-map.svg'

const MobileQuicklinks = ({options, theme, openModal, actions}) => {
  // console.log(options)

  return (
    <MobileQuicklinksContainer theme={theme}>
      <a href='/contact-us/'onClick={e => {
        e.preventDefault()
        actions.router.set('/contact-us/')
      }} css={css`
        &:before {
          background-image: url(${emailIcon});
        }`}><span>Email</span></a>
      {options.acf.phone_number &&
        <a rel="noopener noreferrer" target="_blank" href={`tel:${options.acf.phone_number.replace(/\D/g,'')}`} css={css`
          &:before {
            background-image: url(${phoneIcon});
          }`}><span>Telephone</span></a> }
      {options.acf.google_my_business &&
        <a rel="noopener noreferrer" target="_blank" href={options.acf.google_my_business} css={css`
          &:before {
            background-image: url(${mapIcon});
          }`}><span>Location</span></a> }
      {options.acf.hours &&
        <button onClick={openModal} css={css`
          &:before {
            background-image: url(${clockIcon});
          }`}><span>Hours</span></button> }
    </MobileQuicklinksContainer>
  )
}

const Home = ({state, theme, actions}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const options = state.source.get('acf-options-page')
  const [modalIsOpen,setIsOpen] = useState(false)

  const media = state.source.attachment[post.featured_media]

  // TODO Use srcset for hero background
  // const srcset = Object.values(media.media_details.sizes)
  //   // Get the url and width of each size.
  //   .map(item => [item.source_url, item.width])
  //   // Recude them to a string with the format required by `srcset`.
  //   .reduce(
  //     (final, current, index, array) =>
  //       final.concat(
  //         `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
  //       ),
  //     ""
  //   )
  // console.log(srcset)

  const modalStyles = {
    content : {
      top           : '33%',
      left          : '15%',
      right         : '15%',
      bottom        : 'auto',
      background    : theme.colors.primary,
      color         : theme.colors.light,
      borderRadius  : '0px',
      textAlign     : 'center',
      borderColor   : 'transparent',
      lineHeight    : '1.75rem',
      fontFamily    : 'Trebuchet, sans-serif',
      letterSpacing : '1px'
    }
  }

  Modal.setAppElement('#root')

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div css={css`position: relative`}>
      <Header theme={theme} selectedTheme={post.acf.navigation_bar_theme} />
      
      <SiteContent>
        <Hero hero={post.acf.hero} options={options} backgroundImage={media.source_url} theme={theme} />

        <MobileQuicklinks options={options} theme={theme} openModal={openModal} actions={actions} />

        {post.acf.content.map((section, index) => 
          <Switch key={index}>
            <Awards section={section} theme={theme} when={section.acf_fc_layout == 'awards_section'} />
            <About section={section} theme={theme} options={options} when={section.acf_fc_layout == 'about_section'} />
            <Menus section={section} theme={theme} when={section.acf_fc_layout == 'menus_section'} />
          </Switch>
        )}
      </SiteContent>

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Hours"
        >
          <div css={css`position: relative;`}>
            <button css={css`
              position: absolute;
              top: -1.25rem;
              right: -0.5rem;
              color: ${theme.colors.light};
              background: transparent;
              font-size: 2rem;
              font-weight: bold;
              cursor: pointer;
            `} onClick={closeModal}>&times;</button>
            
            <h2 css={css`
              font-weight: bold;

              &:after {
                margin: 0.5rem auto;
                border-color: ${theme.colors.light};
              }
            `}>Hours</h2>
            
            <p>{options.acf.hours}</p>
          </div>
        </Modal>
    </div>
  )
}

export default connect(Home)

const MobileQuicklinksContainer = styled.div`
  display: none;

  ${props => props.theme.breakPoints.mobile} {
    display: flex;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    height: 4rem;
    justify-content: space-evenly;
    align-items: center;
  }

  a, button {
    display: block;
    background: transparent;
    outline: none;
    border: 0;
    cursor: pointer;

    &:before {
      content: "";
      display: inline-block;
      height: 1.25rem;
      width: 1.25rem;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      background-size: contain;
    }

    span {
      visibility: hidden;
      position: absolute;
    }
  }
`