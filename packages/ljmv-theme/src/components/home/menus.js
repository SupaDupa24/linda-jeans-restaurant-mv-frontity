import React from 'react'
import Image from '@frontity/components/image'

import Link from '../link'

const Menus = ({section}) => {
  // console.log(section)
  return (
    <div>
      <h2>{section.title}</h2>

      <p>{section.text}</p>

      <Link href={section.link.url}>{section.link.title}</Link>

      {section.images.map((image, index) => {
        return(
          <Image key={index.toString()} src={image.url} />
        )
      })}
    </div>
  )
}

export default Menus