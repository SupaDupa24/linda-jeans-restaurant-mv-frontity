import React from 'react'
import {connect, styled} from 'frontity'

const NavLink = ({href, actions, children, theme, selectedTheme}) => {
  return(
    <div>
      <Anchor theme={theme} selectedTheme={selectedTheme} href={href} onClick={e => {
        e.preventDefault()
        actions.router.set(href)
      }}>
        {children}
      </Anchor>
    </div>
  )
}

export default connect(NavLink)

const Anchor = styled.a`
  color: ${props => (
    props.selectedTheme === 'light' ? props.theme.colors.light : props.theme.colors.primary
  )};
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`