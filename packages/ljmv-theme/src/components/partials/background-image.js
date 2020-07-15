import React from 'react'
import {styled} from 'frontity'

const BackgroundImage = ({bgImg}) => {
  return (
    <BackgroundImageDiv bgImg={bgImg} />
  )
}

export default BackgroundImage

const BackgroundImageDiv = styled.div`
  padding-bottom: 56.25%;
  background-image: url(${props => props.bgImg});
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`