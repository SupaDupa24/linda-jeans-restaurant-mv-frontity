import React from 'react'
import {connect, Global, css, styled} from 'frontity'
import Switch from '@frontity/components/switch'

import Link from './link'

import Loading from './loading'
import Home from './home'
import Menus from './menus'
import AboutUs from './about'
import ContactUs from './contact'

const Root = ({state}) => {
  const data = state.source.get(state.router.link)
  let post = null

  if(typeof data.type !== 'undefined' && !!!data.isHome) {
    post = state.source[data.type][data.id]
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

          html {
            font-family: sans-serif;
          }
        `}
      />

      <header>
        <h1>Linda Jean's MV Restaurant</h1>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/menus/">Menus</Link>
          <Link href="/about-us/">About Us</Link>
          <Link href="/contact-us/">Contact Us</Link>
        </nav>
      </header>

      <main>
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isHome} />
          <Menus when={post !== null && post.template == 'menus.php'} />
          <AboutUs when={post !== null && post.template == 'about.php'} />
          <ContactUs when={post !== null && post.template == 'contact.php'} />
        </Switch>
      </main>
    </>
  )
}

export default connect(Root)