import React from 'react'
import {connect, styled} from 'frontity'

const Link = ({href, actions, children, className}) => {
  return(
    <a className={className} href={href} onClick={e => {
      e.preventDefault()
      actions.router.set(href)
    }}>
      {children}
    </a>
  )
}

export default connect(Link)