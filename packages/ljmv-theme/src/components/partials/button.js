import React from 'react'
import {connect, styled, css} from 'frontity'

const Button = ({href, actions, children, external, buttonStyle, theme}) => {
  console.log(buttonStyle)
  const onClickHandler = e => {
    if(!external) {
      e.preventDefault()
      actions.router.set(href)
    }
  }
  switch(buttonStyle) {
    case 'outline':
      return(
        <OutlineButton theme={theme} href={href} target={external ? '_blank' : '_self'} onClick={onClickHandler}>
          {children}
        </OutlineButton>
      )
    case 'filled':
      return(
        <FilledButton theme={theme} href={href} target={external ? '_blank' : '_self'} onClick={onClickHandler}>
          {children}
        </FilledButton>
      )
    }
}

export default connect(Button)

const OutlineButton = styled.a`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem;

  font-weight: bold;
  text-decoration: none;

  outline: ${props => props.theme.colors.light} 2px solid;
  color: ${props => props.theme.colors.light};
`
const FilledButton = styled.a`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem;

  font-weight: bold;
  text-decoration: none;

  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.primary};
`