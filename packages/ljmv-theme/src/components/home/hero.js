import React from 'react'
import {connect} from 'frontity'

import Link from '../partials/link'

const About = ({hero, options}) => {
  return (
    <div>
      <h1>{hero.title}</h1>
      <h2>{hero.subtitle}</h2>

      {hero.buttons.map((button, index) => {
        const onlineOrdering = button.online_ordering_button

        if(onlineOrdering) {
          return(
            <a key={index.toString()} className={button.style} href={options.acf.online_ordering_link}>{button.title}</a>
          )
        } else {
          return (
            <Link key={index.toString()} href={button.link.url} className={button.style}>{button.link.title}</Link>
          )
        }
      })}
    </div>
  )
}

export default connect(About)