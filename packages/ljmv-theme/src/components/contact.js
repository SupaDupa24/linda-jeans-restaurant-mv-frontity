import React from 'react'
import {connect} from 'frontity'

const ContactUs = ({state}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  
  return (
    <div>
      <h1>{post.title.rendered}</h1>
    </div>
  )
}

export default connect(ContactUs)