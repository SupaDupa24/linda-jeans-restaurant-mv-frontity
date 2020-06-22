import React from 'react'
import Image from '@frontity/components/image'

const Awards = ({section}) => {
  // console.log(section)
  return (
    <div>
      {section.awards.map(({logo, link}, index) => {
        return(
          <a key={index.toString()} href={link.url} target="_blank">
            <Image src={logo.url} />
          </a>
        )
      })}

      <h2>{section.text}</h2>
    </div>
  )
}

export default Awards