import React from 'react'
import {styled} from 'frontity'

import BackgroundImage from '../partials/background-image'

import Link from '../partials/link'

const About = ({section, options}) => {
  return (
    <AboutSection>
      <Row>
        <AboutTitleText>
          <h2>{section.title}</h2>

          <p>{section.text}</p>

          <Link href={section.link.url}>{section.link.title}</Link>
        </AboutTitleText>

        <ContactInformation>
          <h3>Phone</h3>

          <a href={`tel:${options.acf.phone_number.replace(/\D/g,'')}`}>{options.acf.phone_number}</a>

          <h3>Hours</h3>

          <p>{options.acf.hours}</p>

          <h3>Location</h3>

          <address>{options.acf.address.street_number} {options.acf.address.street_name}<br />
          {options.acf.address.city}<br />
          {options.acf.address.state}</address>

          <h3>Email</h3>

          <a href={`mailto:${options.acf.email_address}`} target="_blank" rel="noopener noreferrer">{options.acf.email_address}</a>
        </ContactInformation>
      </Row>

      <BackgroundImage bgImg={section.image.url} />
    </AboutSection>
  )
}

export default About

const AboutSection = styled.div`
`

const Row = styled.div`
  display: flex;
  width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
`

const AboutTitleText = styled.div`
  width: 67%;
  padding: 1rem;
`

const ContactInformation = styled.div`
  width: 33%;
  padding: 1rem;

  h3 + * {
    margin-bottom: 1rem;
    display: block;
  }

  address {
    font-style: normal;
  }
`