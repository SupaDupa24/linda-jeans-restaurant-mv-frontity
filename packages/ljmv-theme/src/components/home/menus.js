import React from 'react'
import Image from '@frontity/components/image'
import {styled} from 'frontity'

import Button from '../partials/button'

const Menus = ({section, theme}) => {
  return (
    <MenusSection>
      <MenusTitleText>
        <h2>{section.title}</h2>

        <p>{section.text}</p>

        <Button href={section.link.url} buttonStyle={'primary'} theme={theme}>{section.link.title}</Button>
      </MenusTitleText>

      <ImageCollage>
        <BigImage>
          <div style={{backgroundImage: `url(${section.images[0].url})`}} />
        </BigImage>

        <SmallImages>
          <div style={{backgroundImage: `url(${section.images[1].url})`}} />
          <div style={{backgroundImage: `url(${section.images[2].url})`}} />
        </SmallImages>
      </ImageCollage>
    </MenusSection>
  )
}

export default Menus

const MenusSection = styled.div`
  margin: 3rem auto;
`

const MenusTitleText = styled.div`
  max-width: 960px;
  margin: 0 auto 2rem;
  text-align: center;

  h2:after {
    margin-left: auto;
    margin-right: auto;
  }

  p {
    margin-bottom: 1rem;
  }
`

const ImageCollage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  padding-bottom: 50%;

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
`