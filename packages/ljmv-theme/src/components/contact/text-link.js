import React from 'react'
import {connect, styled} from 'frontity'

import Button from '../partials/button'

const TextLink = ({section, libraries, theme}) => {
  const Html2React = libraries.html2react.Component
  return (
    <>
      <hr />

      <Row>
        <div>
          <h2>{section.title}</h2>

          <Html2React html={section.text} />
        </div>

        <div>
          <Button href={section.link.url} buttonStyle={'primary'} theme={theme}>{section.link.title}</Button>
        </div>
      </Row>
        
    </>
  )
}

export default connect(TextLink)

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  width: 100%;

  div {
    width: 50%;
    padding: 2rem 0;

    &:nth-of-type(2) {
      text-align: right;
    }
  }
`