import React from 'react'
import {connect} from 'frontity'
import Switch from '@frontity/components/switch'

import Hero from './home/hero'
import Awards from './home/awards'
import About from './home/about'
import Menus from './home/menus'

const Home = ({state}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const options = state.source.get('acf-options-page')
  
  return (
    <div>
      <Hero hero={post.acf.hero} options={options} />

      {post.acf.content.map((section, index) => 
        <Switch key={index}>
          <Awards section={section} when={section.acf_fc_layout == 'awards_section'} />
          <About section={section} when={section.acf_fc_layout == 'about_section'} />
          <Menus section={section} when={section.acf_fc_layout == 'menus_section'} />
        </Switch>
      )}
    </div>
  )
}

export default connect(Home)