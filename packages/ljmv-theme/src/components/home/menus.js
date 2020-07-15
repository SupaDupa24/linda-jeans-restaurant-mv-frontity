import React from 'react'
import {styled} from 'frontity'

import Button from '../partials/button'
import Container from '../partials/container'

const Menus = ({section, theme}) => {
  return (
    <MenusSection>
      <Container>
        <MenusTitleText>
          <hr />

          <h2>{section.title}</h2>

          <p>{section.text}</p>

          <Button href={section.link.url} buttonStyle={'primary'} theme={theme}>{section.link.title}</Button>
        </MenusTitleText>
      </Container>

      <ImageCollage theme={theme}>
        <BigImage theme={theme}>
          <div style={{backgroundImage: `url(${section.images[0].url})`}} />
        </BigImage>

        <SmallImages theme={theme}>
          <div style={{backgroundImage: `url(${section.images[1].url})`}} />
          <div style={{backgroundImage: `url(${section.images[2].url})`}} />
        </SmallImages>
      </ImageCollage>
    </MenusSection>
  )
}

export default Menus

const MenusSection = styled.div`
  margin: 5rem auto 1rem;
`

const MenusTitleText = styled.div`
  margin: 0 auto 2rem;
  text-align: center;

  h2 {
    margin-top: 2rem;
    
    &:after {
      margin-left: auto;
      margin-right: auto;
    }
  }

  p {
    margin: 2rem 0;
  }

  a {
    margin-bottom: 3rem;
  }
`

const ImageCollage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  padding-bottom: 50%;
   
  ${props => props.theme.breakPoints.mobile} {
    padding-bottom: 250%;
  }

  > div > div {
    background-repeat: no-repeat;
    background-size: 100%;
    background-size: cover;
    background-position: center;
  }
`

const BigImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: calc(50% + 0.5rem);

  div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  ${props => props.theme.breakPoints.mobile} {
    right: 0;
    bottom: calc(66.67% + 0.5rem);
  }
`

const SmallImages = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(50% + 0.5rem);
  right: 0;

  div {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    &:nth-of-type(1) {
      bottom: calc(50% + 0.5rem);
    }

    &:nth-of-type(2) {
      top: calc(50% + 0.5rem);
    }
  }

  ${props => props.theme.breakPoints.mobile} {
    left: 0;
    top: calc(33.33% + 0.5rem);
  }
`