import React from 'react'
import {styled} from 'frontity'
import Image from '@frontity/components/image'
import ReactTooltip from 'react-tooltip'

const Awards = ({section}) => {
  return (
    <AwardsSection>
      <AwardsContainer>
        {section.awards.map(({logo, link}, index) => {
          return(
            <Award key={index.toString()} href={link.url} target="_blank" rel="noopener noreferrer" data-tip={link.title}>
              <Image src={logo.url} alt={link.title}/>
            </Award>
          )
        })}
      </AwardsContainer>

      <AwardsTitle>{section.text}</AwardsTitle>

      <hr />

      <ReactTooltip html={false} />
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
`

const Award = styled.a`
  display: block;
  width: 20%;
  margin: 1rem;

  padding: 1rem;

  &:hover img {
    filter: grayscale(0%);
    opacity: 1.0;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
    max-height: 5rem;

    filter: grayscale(100%);
    opacity: 0.6;

    transition: all 0.5s ease-in-out;
  }
`