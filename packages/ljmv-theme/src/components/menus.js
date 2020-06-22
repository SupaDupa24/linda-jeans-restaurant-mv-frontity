import React from 'react'
import {connect} from 'frontity'
// import Html2React from '@frontity/html2react'

const Menus = ({state}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]

  console.log(post.acf)
  
  return (
    <div>
      <h1>{post.title.rendered}</h1>

      <div dangerouslySetInnerHTML={{__html:post.content.rendered}} />
    </div>
  )
}

export default connect(Menus)