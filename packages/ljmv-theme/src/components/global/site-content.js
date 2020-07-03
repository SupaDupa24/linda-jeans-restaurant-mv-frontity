import React from 'react'
import {styled} from 'frontity'

const SiteContent = ({children}) => <SiteContentContainer>{children}</SiteContentContainer>

export default SiteContent

const SiteContentContainer = styled.main`
  flex: 1;
`