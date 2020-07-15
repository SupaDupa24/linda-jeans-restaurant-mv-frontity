import React from 'react'
import {connect, styled} from 'frontity'

import Container from '../partials/container'

const NotificationBar = ({state, theme}) => {
  const options = state.source.get('acf-options-page')
  const {notification_bar}= options.acf
  const {showNotification} = state.theme

  const closeNotification = () => {
    state.theme.showNotification = false
    console.log(state)
  }

  return(
    <StyledNotificationBar theme={theme} display={showNotification && notification_bar.length > 0}>
      <Container>
        <span dangerouslySetInnerHTML={{__html: notification_bar }} />

        <DismissNotification theme={theme} onClick={() => closeNotification()}>&times;</DismissNotification>
      </Container>
    </StyledNotificationBar>
  )
}

export default connect(NotificationBar)

const StyledNotificationBar = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  padding: 0.5rem 0;

  display: ${props => props.display ? 'block' : 'none'};
  
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const DismissNotification = styled.button`
  background: transparent;
  outline: none;
  color: ${props => props.theme.colors.light};
  font-size: 2rem;
  cursor: pointer;
`