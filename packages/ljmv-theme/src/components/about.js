import React from 'react'
import {connect} from 'frontity'

const AboutUs = ({state}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  
  return (
    <div>
      <h1>{post.title.rendered}</h1>
    </div>
  )
}

export default connect(AboutUs)