import React from 'react'
import {connect, styled} from 'frontity'

const Button = ({href, actions, children, external, buttonStyle, theme}) => {
  const onClickHandler = e => {
    if(!external) {
      e.preventDefault()
      actions.router.set(href)
    }
  }
  
  switch(buttonStyle) {
    case 'lightOutline':
      return(
        <OutlineButton theme={theme} href={href} target={external ? '_blank' : '_self'} rel={ external ? 'noopener noreferrer' : ''} onClick={onClickHandler}>
          {children}
        </OutlineButton>
      )
    case 'light':
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
    case 'secondary':
      return(
        <SecondaryButton theme={theme} href={href} target={external ? '_blank' : '_self'} rel={ external ? 'noopener noreferrer' : ''} onClick={onClickHandler}>
          {children}
        </SecondaryButton>
      )
    case 'primaryOutline':
      return(
        <PrimaryOutlineButton theme={theme} href={href} target={external ? '_blank' : '_self'} rel={ external ? 'noopener noreferrer' : ''} onClick={onClickHandler}>
          {children}
        </PrimaryOutlineButton>
      )
    default:
        return(<pre>Wrong button style selected</pre>)
  }
}

export default connect(Button)

const OutlineButton = styled.a`
  ${props => props.theme.buttons.base}
  ${props => props.theme.buttons.lightOutline}
`

const FilledButton = styled.a`
  ${props => props.theme.buttons.base}
  ${props => props.theme.buttons.light}
`

const PrimaryButton = styled.a`
  ${props => props.theme.buttons.base}
  ${props => props.theme.buttons.primary}
`

const SecondaryButton = styled.a`
  ${props => props.theme.buttons.base}
  ${props => props.theme.buttons.secondary}
`

const PrimaryOutlineButton = styled.a`
  ${props => props.theme.buttons.base}
  ${props => props.theme.buttons.primaryOutline}
`