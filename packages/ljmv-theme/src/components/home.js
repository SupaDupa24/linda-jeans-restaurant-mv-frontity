import React from 'react'
import {connect} from 'frontity'
import Switch from '@frontity/components/switch'

import Hero from './home/hero'
import Awards from './home/awards'
import About from './home/about'
import Menus from './home/menus'

const Home = ({state, theme}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const options = state.source.get('acf-options-page')

  const media = state.source.attachment[post.featured_media]

  // TODO Use srcset for hero background
  // const srcset = Object.values(media.media_details.sizes)
  //   // Get the url and width of each size.
  //   .map(item => [item.source_url, item.width])
  //   // Recude them to a string with the format required by `srcset`.
  //   .reduce(
  //     (final, current, index, array) =>
  //       final.concat(
  //         `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
  //       ),
  //     ""
  //   )
  // console.log(srcset)
  
  return (
    <div>
      <Hero hero={post.acf.hero} options={options} backgroundImage={media.source_url} theme={theme} />

      {post.acf.content.map((section, index) => 
        <Switch key={index}>
          <Awards section={section} when={section.acf_fc_layout == 'awards_section'} />
          <About section={section} options={options} when={section.acf_fc_layout == 'about_section'} />
          <Menus section={section} theme={theme} when={section.acf_fc_layout == 'menus_section'} />
        </Switch>
      )}
    </div>
  )
}

export default connect(Home)