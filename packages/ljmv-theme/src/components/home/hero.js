import React from 'react'
import {connect, styled} from 'frontity'

import Button from '../partials/button'

const Hero = ({hero, options, backgroundImage, theme}) => {
  return (
    <HeroContainer backgroundImage={backgroundImage} theme={theme}>
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
    </HeroContainer>
  )
}

export default connect(Hero)

const HeroContainer = styled.div`
  padding: 20% 5rem;
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
    background: rgba(0, 0, 0, 0.25);
    z-index: -1;
  }

  h1, h2 {
    z-index: 1;
    color: ${props => props.theme.colors.light};

  }
`