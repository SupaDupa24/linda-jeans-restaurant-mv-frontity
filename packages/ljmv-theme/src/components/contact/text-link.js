import React from 'react'
import {connect, styled} from 'frontity'

import Button from '../partials/button'

const TextLink = ({section, libraries, theme}) => {
  const Html2React = libraries.html2react.Component
  return (
    <>
      <hr />

      <Row theme={theme}>
        <div>
          <h2>{section.title}</h2>

          <Html2React html={section.text} />
        </div>

        <div>
          <Button href={section.link.url} external={true} buttonStyle={'primary'} theme={theme}>{section.link.title}</Button>
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
  flex-wrap: wrap;

  div {
    width: 50%;
    padding: 2rem 0;

    ${props => props.theme.breakPoints.mobile} {
      width: 100%;
      padding: 1rem 0;
    }

    &:nth-of-type(2) {
      text-align: right;

      ${props => props.theme.breakPoints.mobile} {
        text-align: center;
      }
    }
  }
`