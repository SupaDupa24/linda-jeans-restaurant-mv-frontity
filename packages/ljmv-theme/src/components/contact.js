import React from 'react'
import {connect, styled} from 'frontity'
import Switch from '@frontity/components/switch'

import PageHero from './partials/page-hero'

import TextLink from './contact/text-link'
import ContactForm from './contact/contact-form'

const ContactUs = ({state, theme}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  
  return (
    <>
      <PageHero hero={{title: post.title.rendered, img: state.source.attachment[post.featured_media].source_url}} theme={theme} />

      <ContactContent>
        {post.acf.content.map((section, index) => 
          <Switch key={index}>
            <ContactFormSection theme={theme} when={section.acf_fc_layout == 'text_link'}>
              <TextLink section={section} theme={theme} />
            </ContactFormSection>

            <ContactFormSection theme={theme} when={section.acf_fc_layout == 'contact_form_section'}>
              <ContactForm section={section} theme={theme} />
            </ContactFormSection>
          </Switch>
        )}
      </ContactContent>
    </>
  )
}

export default connect(ContactUs)

const ContactContent = styled.div`
  margin: 2rem 0;
  padding: 0 1rem;
`

const ContactFormSection = styled.div`
  max-width: 960px;
  margin: 3rem auto;

  ${props => props.theme.breakPoints.mobile} {
    margin: 1rem auto;
  }
`