import React from 'react'
import {connect} from 'frontity'
import Switch from '@frontity/components/switch'

import Menus from './menus'
import AboutUs from './about'
import ContactUs from './contact'

const Post = ({state, theme}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]

  return (
    <Switch>
      <Menus when={post.template == 'menus.php'} />
      <AboutUs when={post.template == 'about.php'} theme={theme} />
      <ContactUs when={post.template == 'contact.php'} theme={theme} />
    </Switch>
  )
}

export default connect(Post)