import React from 'react'
import {styled} from 'frontity'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Loading = ({theme}) => {
  return (
    <LoadingPage>
      <Loader type="ThreeDots" color={theme.colors.primary} height={80} width={80} />
    </LoadingPage>
  )
}

export default Loading

const LoadingPage = styled.div`
  margin: 5rem auto;
  text-align: center;
`