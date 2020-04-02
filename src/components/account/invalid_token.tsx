import React from 'react'

import SEO from '../shared/SEO'

export const InvalidToken = ({ path }: { path: string }) => {
  return (
    <div>
      <SEO title='login' />
      <h1>Error: Invalid Activation Token.</h1>
    </div>
  )
}
