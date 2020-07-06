import React from 'react'
import {styled} from 'frontity'
import Image from '@frontity/components/image'

const Awards = ({section, theme}) => {
  return (
    <AwardsSection>
      <AwardsContainer>
        {section.awards.map(({logo, link}, index) => {
          return(
            <Award key={index.toString()} href={link.url} target="_blank" rel="noopener noreferrer" theme={theme}>
              <Tooltip theme={theme}>{link.title}</Tooltip>
              <Image src={logo.url} alt={link.title}/>
            </Award>
          )
        })}
      </AwardsContainer>

      <AwardsTitle>{section.text}</AwardsTitle>

      <hr />
    </AwardsSection>
  )
}

export default Awards

const AwardsSection = styled.div`
  max-width: 960px;
  margin: 3rem auto;
`

const AwardsTitle = styled.h2`
  font-style: italic;
  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  text-align: center;
  display: block;
  text-transform: none;

  &:after {
    display: none;
  }
`

const AwardsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`

const Award = styled.a`
  display: block;
  width: 20%;
  margin: 1rem;
  position: relative;

  ${props => props.theme.breakPoints.mobile} {
    width: 33%;
    margin: 0;
  }

  padding: 1rem;

  &:hover img {
    filter: grayscale(0%);
    opacity: 1.0;
  }

  img, div {
    transition: all 0.5s ease-in-out;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
    max-height: 5rem;

    filter: grayscale(100%);
    opacity: 0.6;
  }

  div {
    opacity: 0;
  }

  &:hover div {
    opacity: 1.0;
  }
`

const Tooltip = styled.div`
  position: absolute;
  z-index: 100;

  font-size: 0.8rem;

  top: -1.5rem;
  left: 10%;
  right: 10%;
  text-align: center;
  padding: 0.5rem;

  color: ${props => props.theme.colors.light};

  background: #000;
  background: rgba(0, 0, 0, 0.75);

  &:after {
    margin-top: 0.5rem;
    position: absolute;
    z-index: 100;
    content: "";
    display: block;
    width: 0;
    height: 0;
    left: 44%;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    
    border-top: 15px solid #000;
    border-top-color: rgba(0, 0, 0, 0.75);
  }
`