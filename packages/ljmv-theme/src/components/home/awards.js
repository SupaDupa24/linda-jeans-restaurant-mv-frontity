import React from 'react'
import {connect, styled} from 'frontity'
import Image from '@frontity/components/image'
import ReactTooltip from 'react-tooltip'

const Awards = ({section}) => {
  console.log(section.awards)
  return (
    <AwardsSection>
      <AwardsContainer>
        {section.awards.map(({logo, link}, index) => {
          return(
            <Award key={index.toString()} href={link.url} target="_blank" data-tip={link.title}>
              <Image src={logo.url} alt={link.title}/>
            </Award>
          )
        })}
      </AwardsContainer>

      <h2>{section.text}</h2>

      <hr />

      <ReactTooltip />
    </AwardsSection>
  )
}

export default connect(Awards)

const AwardsSection = styled.div`
  max-width: 960px;
  margin: 3rem auto;

  h2 {
    font-style: italic;
    text-align: center;
    font-weight: bold;
    font-size: 1.125rem;
  }
`

const AwardsContainer = styled.div`
  display: flex;
`

const Award = styled.a`
  display: block;
  width: 20%;
  margin: 1rem;

  padding: 1rem;

  img {
    display: block;
    max-width: 100%;

    filter: grayscale(100%);
    opacity: 0.6;

    transition: all 0.5s ease-in-out;

    &:hover {
      filter: grayscale(0%);
      opacity: 1.0;
    }
  }
`