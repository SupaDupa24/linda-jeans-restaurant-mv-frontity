import React from 'react'
import {connect, styled} from 'frontity'
import Image from '@frontity/components/image'

import PageHero from './partials/page-hero'
import BackgroundImage from './partials/background-image'
import Button from './partials/button'
import Container from './partials/container'

const AboutUs = ({state, theme, libraries}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component
  
  return (
    <AboutPage>
      <PageHero hero={{title: post.title.rendered, img: state.source.attachment[post.featured_media].source_url}} theme={theme} />

      <AboutUsSection>
        <Container>
          <hr />

          <h2>{post.acf.our_story.title}</h2>

          <Html2React html={post.acf.our_story.content} />

          <Image src={post.acf.our_story.signature.url} />
        </Container>
      </AboutUsSection>

      <BackgroundImage bgImg={post.acf.our_story.image.url} theme={theme} />

      <AboutUsSection>
        <Container>
          <hr />

          <h2>{post.acf.our_team.title}</h2>

          <Html2React html={post.acf.our_team.content} />

          <Button external={true} href={post.acf.our_team.link.url} buttonStyle={'primary'} theme={theme}>{post.acf.our_team.link.title}</Button>
        </Container>
      </AboutUsSection>

      <BackgroundImage bgImg={post.acf.our_team.image.url} theme={theme} />
    </AboutPage>
  )
}

export default connect(AboutUs)

const AboutPage = styled.div`
  padding-bottom: 1rem;
`

const AboutUsSection = styled.div`
  padding: 3rem 0;

  text-align: center;

  h2 {
    margin: 2rem 0;

    &:after {
      margin-left: auto;
      margin-right: auto;
    }
  }

  img {
    max-width: 100%;
    max-height: 5rem;
    display: block;
    margin: 2rem 0 .5rem auto;
  }

  a {
    margin: 2rem 0;
  }
`