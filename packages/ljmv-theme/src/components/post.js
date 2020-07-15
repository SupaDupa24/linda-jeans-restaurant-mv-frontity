import React from 'react'
import {connect, css} from 'frontity'
import Switch from '@frontity/components/switch'

import SiteContent from './global/site-content'
import Header from './global/header'

import Menus from './menus'
import AboutUs from './about'
import ContactUs from './contact'

const Post = ({state, theme}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]

  return (
    <div css={css`position: relative`}>
      <Header theme={theme} selectedTheme={post.acf.navigation_bar_theme} />

      <SiteContent>
        <Switch>
          <Menus when={post.template == 'menus.php'} theme={theme} />
          <AboutUs when={post.template == 'about.php'} theme={theme} />
          <ContactUs when={post.template == 'contact.php'} theme={theme} />
        </Switch>
      </SiteContent>
    </div>
  )
}

export default connect(Post)