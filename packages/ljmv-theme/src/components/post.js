import React from 'react'
import {connect} from 'frontity'
import Switch from '@frontity/components/switch'

import Menus from './menus'
import AboutUs from './about'
import ContactUs from './contact'

const Post = ({state}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]

  return (
    <Switch>
      <Menus when={post.template == 'menus.php'} />
      <AboutUs when={post.template == 'about.php'} />
      <ContactUs when={post.template == 'contact.php'} />
    </Switch>
  )
}

export default connect(Post)