import React from 'react'
import Image from '@frontity/components/image'

import Link from '../link'

const About = ({section}) => {
  return (
    <div>
      <h2>{section.title}</h2>

      <div>{section.text}</div>

      <Link href={section.link.url}>{section.link.title}</Link>

      <Image src={section.image.url} />
    </div>
  )
}

export default About