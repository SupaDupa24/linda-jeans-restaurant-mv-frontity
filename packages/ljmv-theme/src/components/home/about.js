import React from 'react'
import {styled, connect} from 'frontity'

import BackgroundImage from '../partials/background-image'

import Link from '../partials/link'
import Container from '../partials/container'

const About = ({section, options, theme, libraries}) => {
  const Html2React = libraries.html2react.Component

  return (
    <AboutSection>
      <Container>
        <Row>
          <AboutTitleText theme={theme}>
            <h2>{section.title}</h2>

            <div><Html2React html={section.text} /></div>

            <StyledLink theme={theme} href={section.link.url}>{section.link.title}</StyledLink>
          </AboutTitleText>

          <ContactInformation theme={theme}>
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
      </Container>

      <BackgroundImage bgImg={section.image.url} theme={theme}/>
    </AboutSection>
  )
}

export default connect(About)

const AboutSection = styled.div`
`

const Row = styled.div`
  display: flex;
  max-width: 960px;
  margin: 2rem auto 3rem;
  padding: 1rem 0;
  justify-content: space-between;
`

const AboutTitleText = styled.div`
  width: calc(66.67% - 5rem);

  ${props => props.theme.breakPoints.tablet} {
    width: 100%;
  }
  
  ${props => props.theme.breakPoints.mobile} {
    text-align: center;

    h2 { 
      &:after {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`

const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;

  h3 + * {
    margin-bottom: 1rem;
  }

  address {
    font-style: normal;
  }

  a {
    display: inline-block;
  }

  ${props => props.theme.breakPoints.tablet} {
    display: none;
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
`