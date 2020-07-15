import React from 'react'
import {styled} from 'frontity'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import SiteContent from './global/site-content'

const Loading = ({theme}) => {
  return (
    <SiteContent>
      <LoadingPage>
        <Loader type="ThreeDots" color={theme.colors.primary} height={80} width={80} />
      </LoadingPage>
    </SiteContent>
  )
}

export default Loading

const LoadingPage = styled.div`
  margin: 5rem auto;
  text-align: center;
`