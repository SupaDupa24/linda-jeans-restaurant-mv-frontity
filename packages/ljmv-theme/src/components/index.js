import React from 'react'
import {connect, Global, css} from 'frontity'
import Switch from '@frontity/components/switch'

import Header from './global/header'

import Loading from './loading'
import Home from './home'
import Post from './post'
import PageError from './page-error'

import Trebuchet from '../fonts/trebuc.ttf'
// import TrebuchetItalic from '../fonts/Trebuchet-MS-Italic.ttf'

const Root = ({state}) => {
  const data = state.source.get(state.router.link)

  const theme = {
    colors: {
      light: '#FFFFFF',
      dark: '#000000',
      primary: 'maroon',
      secondary: 'lightgray'
    }
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

          @font-face {
            font-family: Trebuchet;
            src: url(${Trebuchet});
          }

          html {
            font-family: Trebuchet, sans-serif;
          }

          button, a {
            border: 0;
            outline: 0;

            &::-moz-focus-inner {
              border: 0;
            }
          }

          hr {


            &:before {
              content: "";
              ${'' /* display: block; */}
              border-bottom: 3px solid ${theme.colors.dark};
              width: 100%;
            }
          }
        `}
      />

      <Header theme={theme} />

      <main>
        <Switch>
          <Loading when={data.isFetching} theme={theme} />
          <Home when={data.isHome} theme={theme} />
          <Post when={data.isPostType} theme={theme} />
          <PageError when={data.isError} theme={theme} />
        </Switch>
      </main>
    </>
  )
}

export default connect(Root)