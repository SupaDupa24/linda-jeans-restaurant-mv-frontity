import React from 'react'
import {styled} from 'frontity'

const BackgroundImage = ({bgImg, theme}) => {
  return (
    <BackgroundImageDiv theme={theme} bgImg={bgImg} />
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

  ${props => props.theme.breakPoints.mobile} {
    padding-bottom: 85%;
  }
`