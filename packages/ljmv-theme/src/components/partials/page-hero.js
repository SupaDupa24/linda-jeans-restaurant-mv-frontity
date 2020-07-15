import React from 'react'
import {styled} from 'frontity'

const PageHero = ({hero, theme}) => {
  return (
    <PageHeroContainer hero={hero} theme={theme}>
      <h1>{hero.title}</h1>
    </PageHeroContainer>
  )
}

export default PageHero

const PageHeroContainer = styled.div`
  padding: 12.5% 0;

  ${props => props.theme.breakPoints.tablet} {
    padding: 25% 0;
  }

  background-image: url(${props => props.hero.img});
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

  h1 {
    display: block;
    text-align: center;
    max-width: 960px;
    margin: 0 auto;
    text-transform: uppercase;
    color: ${props => props.theme.colors.light};
    font-weight: bold;
    font-size: 7rem;

    ${props => props.theme.breakPoints.tablet} {
      font-size: 6rem;
    }

    ${props => props.theme.breakPoints.mobile} {
      font-size: 3.5rem;
    }
  }
`