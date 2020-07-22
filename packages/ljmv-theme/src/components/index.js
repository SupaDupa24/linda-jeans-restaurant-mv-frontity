import React from 'react'
import {connect, Global, css, styled} from 'frontity'
import Switch from '@frontity/components/switch'

import Color from 'color'

import NotificationBar from './global/notification-bar'
import Footer from './global/footer'

import Loading from './loading'
import Home from './home'
import Post from './post'
import PageError from './page-error'

import Trebuchet from '../fonts/trebuc.ttf'

const Root = ({state}) => {
  const data = state.source.get(state.router.link)

  const themeColors = {
      light: '#F8f6e9',
      primary: '#3c292f',
      secondary: '#6b5d75',
      success: '#8fdd88',
      failure: '#f7796e'
    }
  
  const themeButtons = {
    base: css`
      display: inline-block;
      margin: 0.5rem;
      padding: 1.25rem 1.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    
      font-weight: bold;
      text-decoration: none;

      transition: all 0.125s ease-in-out;
      cursor: pointer;
    `,
    light: css`
      background: ${themeColors.light};
      color: ${themeColors.primary};

      &:hover,
      &:focus {
        background: ${themeColors.primary};
        color: ${themeColors.light};
      }
    `,
    primary: css`
      border: ${themeColors.primary} 2px solid;
      background: ${themeColors.primary};
      color: ${themeColors.light};

      &:hover,
      &:focus {
        background: ${themeColors.light};
        color: ${themeColors.primary};
      }
    `,
    secondary: css`
      border: ${themeColors.secondary} 2px solid;
      background: ${themeColors.secondary};
      color: ${themeColors.light};

      &:hover,
      &:focus {
        background: ${themeColors.primary};
        border-color: ${themeColors.primary};
      }
    `,
    lightOutline: css`
      border: ${themeColors.light} 2px solid;
      color: ${themeColors.light};
      background: transparent;

      &:hover,
      &:focus {
        background: ${themeColors.light};
        color: ${themeColors.primary};
      }
    `,
    primaryOutline: css`
      outline: ${themeColors.primary} 2px solid;
      color: ${themeColors.primary};
      background: transparent;

      &:hover,
      &:focus {
        background: ${themeColors.primary};
        color: ${themeColors.light};
      }
    `
  }

  const themeBreakPoints = {
    mobile: `@media (max-width: 576px)`,
    tablet: `@media (max-width: 950px)`,
    navbar: `@media (max-width: 790px)`
  }

  const themeCards = {
    base: css`
      border: 1px solid ${themeColors.primary};
      padding: 1rem 1.5rem;
      text-align: left;
    `,
    success: css`
      border-color: ${Color(themeColors.success).darken(0.2).string()};
      background: ${themeColors.success};
      background: ${Color(themeColors.success).fade(0.5).string()};
    `,
    failure: css`
      border-color: ${Color(themeColors.failure).darken(0.2).string()};
      background: ${themeColors.failure};
      background: ${Color(themeColors.failure).fade(0.5).string()};
    `
  }

  const theme = {
    colors: themeColors,
    buttons: themeButtons,
    breakPoints: themeBreakPoints,
    cards: themeCards
  }

  return (
    <>
      <Global 
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          body {
            font-size: 18px;
          }

          p, ol, ul {
            margin-bottom: 1.5rem;
          }

          ol, ul {
            margin-left: 2rem;
          }

          @font-face {
            font-family: Trebuchet;
            src: url(${Trebuchet});
          }

          #root {
            font-family: Trebuchet, sans-serif;
            color: ${theme.colors.primary};
            background: ${theme.colors.light};
            line-height: 1.5;
            letter-spacing: 1px;

            display: flex;
            min-height: 100vh;
            flex-direction: column;
            position: relative;
            overflow: hidden;
          }

          h2 {
            display: inline-block;
            text-transform: uppercase;
            margin-bottom: 1rem;
            font-size: 2rem;

            &:after {
              content: "";
              display: block;
              width: 50%;
              margin-top: 0.5rem;
              border-bottom: ${theme.colors.primary} 1px solid;
            }
          }

          h3 {
            text-transform: uppercase;
          }

          button, a {
            border: 0;
            outline: 0;

            &::-moz-focus-inner {
              border: 0;
            }
          }

          button {
            font-family: Trebuchet, sans-serif;
          }

          a {
            color: ${theme.colors.secondary};
            text-decoration: none;

            &::visited {
              color: ${theme.colors.primary};
            }

            &::active, &::hover {
              color: ${theme.colors.primary};
            }
          }

          hr {
            margin: 1rem;
            border: 0;
            border-top: 2px solid ${theme.colors.primary};

            &:after {
              max-width: 95%;
              margin: 2px auto 0;
              content: "";
              display: block;
              border-top: 1px solid ${theme.colors.primary};
              width: 100%;
            }
          }
        `}
      />

      <NotificationBar theme={theme} />

      <Switch>
        <Loading when={data.isFetching} theme={theme} />
        <Home when={data.isHome} theme={theme} />
        <Post when={data.isPostType} theme={theme} />
        <PageError when={data.isError} theme={theme} />
      </Switch>

      <Footer theme={theme} />
    </>
  )
}

export default connect(Root)