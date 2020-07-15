import React from 'react'
import {css} from 'frontity'

const Container = ({children}) => (
  <div css={css`
    max-width: 960px;
    padding: 0 1rem;
    margin: 0 auto; 
  `}>{children}</div>)

export default Container