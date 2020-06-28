import React from 'react'
import {connect} from 'frontity'

const Menus = ({state, libraries}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component
  
  return (
    <div>
      <h1>{post.title.rendered}</h1>
      
      <Html2React html={post.content.rendered} />
    </div>
  )
}

export default connect(Menus)