import React from 'react'
import {connect} from 'frontity'

import Container from './partials/container'

const Post = ({state}) => {
  post = state.source[data.type][data.id]

  return (
    <Container>
      <h1>Uh oh!</h1>

      <p>You've stumbled on a missing page, broken link, or are just looking for something that never existed.  Try to use the navigation to find what you are looking for or contact us if you think this page should exist.</p>
    </Container>
  )
}

export default connect(Post)