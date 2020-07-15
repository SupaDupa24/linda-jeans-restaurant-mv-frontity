import React from 'react'
import {styled} from 'frontity'

import Button from '../partials/button'
import Container from '../partials/container'

const Hero = ({hero, options, backgroundImage, theme}) => {
  return (
    <HeroContainer backgroundImage={backgroundImage} theme={theme}>
      <Container>
        <HeroContent theme={theme}>
          <h1>{hero.title}</h1>
          <h2>{hero.subtitle}</h2>

          {hero.buttons.map((button, index) => {
            const onlineOrdering = button.online_ordering_button

            if(onlineOrdering) {
              return(
                <Button theme={theme} key={index.toString()} buttonStyle={button.style} href={options.acf.online_ordering_link.url} external={true}>{button.title}</Button>
              )
            } else {
              return (
                <Button theme={theme} key={index.toString()} href={button.link.url} buttonStyle={button.style}>{button.link.title}</Button>
              )
            }
          })}
        </HeroContent>
      </Container>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  padding: 20% 0;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;
    background: rgba(0, 0, 0, 0.15);
    z-index: -1;
  }

  ${props => props.theme.breakPoints.mobile} {
    min-height: calc(100vh - 4rem);
    padding-top: 25vh;
    padding-bottom: 0;
  }

  h1, h2 {
    z-index: 1;
    color: ${props => props.theme.colors.light};
  }

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 3.2rem;

    ${props => props.theme.breakPoints.mobile} {
      font-size: 2.4rem;
    } 
  }

  h2 {
    display: block;
    text-transform: none;
    font-style: italic;

    &:after {
      display: none;
    }

    ${props => props.theme.breakPoints.mobile} {
      font-size: 1.08rem;
    }
  }
`

const HeroContent = styled.div`
  max-width: 960px;
  margin: 0 auto;

  ${props => props.theme.breakPoints.mobile} {
    padding: 2rem 1rem;
    text-align: center;
  }
`