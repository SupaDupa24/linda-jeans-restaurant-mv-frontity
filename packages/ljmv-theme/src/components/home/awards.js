import React from 'react'
import {connect, styled} from 'frontity'
import Image from '@frontity/components/image'
import ReactTooltip from 'react-tooltip'

const Awards = ({section}) => {
  return (
    <AwardsSection>
      <AwardsContainer>
        {section.awards.map(({logo, link}, index) => {
          return(
            <Award key={index.toString()} href={link.url} target="_blank" data-tip={link.title} html={false}>
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
    margin-bottom: 2rem;
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