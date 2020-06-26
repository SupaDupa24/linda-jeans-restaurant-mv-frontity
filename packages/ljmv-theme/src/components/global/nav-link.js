import React from 'react'
import {connect, styled} from 'frontity'

const NavLink = ({href, actions, children, theme}) => {
  return(
    <div>
      <Anchor theme={theme} href={href} onClick={e => {
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
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`