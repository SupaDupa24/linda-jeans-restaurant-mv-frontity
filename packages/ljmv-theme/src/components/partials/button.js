import React from 'react'
import {connect, styled, css} from 'frontity'

const Button = ({href, actions, children, external, buttonStyle, theme}) => {
  const onClickHandler = e => {
    if(!external) {
      e.preventDefault()
      actions.router.set(href)
    }
  }
  switch(buttonStyle) {
    case 'outline':
      return(
        <OutlineButton theme={theme} href={href} target={external ? '_blank' : '_self'} rel={ external ? 'noopener noreferrer' : ''} onClick={onClickHandler}>
          {children}
        </OutlineButton>
      )
    case 'filled':
      return(
        <FilledButton theme={theme} href={href} target={external ? '_blank' : '_self'} rel={ external ? 'noopener noreferrer' : ''} onClick={onClickHandler}>
          {children}
        </FilledButton>
      )
    case 'primary':
      return(
        <PrimaryButton theme={theme} href={href} target={external ? '_blank' : '_self'} rel={ external ? 'noopener noreferrer' : ''} onClick={onClickHandler}>
          {children}
        </PrimaryButton>
      )
  }
}

export default connect(Button)

const basicButtonStyles = css`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;

  font-weight: bold;
  text-decoration: none;
`

const OutlineButton = styled.a`
  ${basicButtonStyles}  

  outline: ${props => props.theme.colors.light} 2px solid;
  color: ${props => props.theme.colors.light};
`
const FilledButton = styled.a`
  ${basicButtonStyles}

  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.primary};
`

const PrimaryButton = styled.a`
  ${basicButtonStyles}

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
`