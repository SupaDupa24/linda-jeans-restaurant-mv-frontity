import React, {useState, useEffect, useRef} from 'react'
import {connect, styled} from 'frontity'
import Switch from '@frontity/components/switch'

import PageHero from './partials/page-hero'
import Button from './partials/button'
import Container from './partials/container'

const MenuItem = ({menuItem}) => {
  return (
    <StyledMenuItem>
      <h3>{menuItem.name}</h3>
      <p>{menuItem.description}</p>
      {menuItem.price && <Price>{menuItem.price}</Price>}
    </StyledMenuItem>
  )
}

const SectionTitle = ({sectionTitle}) => {
  return (
    <StyledSectionTitle>
      <h3>{sectionTitle.title}</h3>

      <p>{sectionTitle.description}</p>
    </StyledSectionTitle>
  )
}

const EmbeddedMenu = ({menu, theme}) => {
  const scrollableDiv = useRef(null)

  useEffect(() => {
    scrollableDiv.current.scrollTo(0,0)
  })

  return (
    <StyledEmbed title={menu.title} theme={theme}>
      <div>
        <div ref={scrollableDiv}>
          <h2>{menu.title}</h2>

          {menu.menu_items.map((menu_item, index) => 
              <Switch key={index}>
                <MenuItem menuItem={menu_item} when={menu_item.acf_fc_layout == 'menu_item'} />
                <SectionTitle sectionTitle={menu_item} when={menu_item.acf_fc_layout == 'section_title'} />
              </Switch>)}
        </div>
      </div>
    </StyledEmbed>
  )
}

const MenuNavigation = ({menus, selectMenu, theme}) => {
  return (
    <div>
      {menus.map((menu, index) => <MenuNavLink theme={theme} key={`${menu.title.replace(/[^a-zA-Z ]/g, '')}-${index}`} onClick={() => selectMenu(menu)}>{menu.title}</MenuNavLink>)}
    </div>
  )
}

const Menus = ({state, libraries, theme}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component
  const [selectedMenu, selectMenu] = useState(post.acf.menus[0])
  const options = state.source.get('acf-options-page')
  
  return (
    <>
      <PageHero hero={{title: post.title.rendered, img: state.source.attachment[post.featured_media].source_url}} theme={theme} />

      <Container>
        <ContentSection theme={theme}>
          <hr />

          <MenuNavigation menus={post.acf.menus} selectMenu={selectMenu} theme={theme}/>

          <Html2React html={post.content.rendered} />
        </ContentSection>

        <EmbedSection theme={theme}>
          <EmbeddedMenu menu={selectedMenu} theme={theme} />

          <hr />
        </EmbedSection>

        <MenuButtonSection theme={theme}>
          <Button theme={theme} buttonStyle='primary' href={options.acf.online_ordering_link.url} external={true}>Order Here</Button>

          {selectedMenu.pdf && <Button theme={theme} buttonStyle='secondary' href={selectedMenu.pdf.url} external={true}>PDF Menu</Button>}
        </MenuButtonSection>
      </Container>
    </>
  )
}

export default connect(Menus)

const ContentSection = styled.div`
  padding: 3rem 0 0;

  display: flex;
  flex-direction: column;

  ${props => props.theme.breakPoints.mobile} {
    padding: 3rem 1rem 1rem;

    p {
      order: 0;
    }

    div {
      order: 2;
    }

    hr {
      order: 1;
    }
  }

  text-align: center;

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

const EmbedSection = styled.div`
  max-width: 960px;
  margin: 0 auto;

  padding: 3rem 1rem 1rem;

  ${props => props.theme.breakPoints.mobile} {
    padding: 1rem 1rem 0;
  }
`

const MenuButtonSection = styled.div`
  max-width: 960px;
  margin: 0 auto;

  padding: 0 1rem 3rem;
  display: flex;
  justify-content: space-between;

  ${props => props.theme.breakPoints.mobile} {
    padding: 0 1rem 1rem;
  }
`

const MenuNavLink = styled.button`
  ${props => props.theme.buttons.base}
  ${props => props.theme.buttons.primaryOutline}

  padding: 0.5rem 0.75rem;
  margin: 1.5rem 1.5rem 2.5rem;
  font-size: 1.15rem;

  ${props => props.theme.breakPoints.mobile} {
    width: calc(50% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`

const StyledEmbed = styled.div`
  padding: 8px;
  border: 2px ${props => props.theme.colors.primary} solid;
  height: 90%;
  height: 90vh;
  position: relative;
  margin: 0 10px 3rem;
  overflow: hidden;

  ${props => props.theme.breakPoints.mobile} {
    margin: 1rem -10px;
    height: 65%;
    height: 65vh;
  }

  > div {
    border: 1px ${props => props.theme.colors.primary} solid;
    overflow: hidden;
    height: 100%;

    > div {
      text-align: center;
      overflow-y: scroll;
      height: 100%;
      background: #FCF2EB;
      padding: 3rem 1rem;
      position: relative;

      h2 {
        position: relative;
        display: block;
        font-size: 2rem;
        margin-bottom: 3rem;

        &:before,
        &:after {
          content: "";
          display: inline-block;
          height: 2px;
          width: 25%;
          vertical-align: middle;
          background: ${props => props.theme.colors.primary};
          margin-right: 0.6rem;

          ${props => props.theme.breakPoints.mobile} {
            width: 10%;
          }
        }
        
        &:before {
          margin-right: 0.6rem;
        }

        &:after {
          border: 0;
          margin-left: 0.6rem;
          margin-top: -.15rem;
        }
      }
    }
  }
`

const StyledMenuItem = styled.div`
  max-width: 640px;
  margin: 0 auto 2rem;

  h3 {
    text-transform: uppercase;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
  }
`

const Price = styled.p`
  font-style: italic;

  &:before {
    content: '$';
    display: inline;
  }
`

const StyledSectionTitle = styled.div`
  max-width: 640px;
  margin: 3rem auto;

  h3 {
    font-size: 1.75rem;
  }

  p {
    font-size: 1.15rem;
  }
`