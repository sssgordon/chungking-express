import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({
  title,
  description,
  image,
}: {
  title: string
  description?: string
  image?: string
}) => {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
        {image && <meta name='image' content={`https:${image}`} />}
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        {image && <meta property='og:image' content={`https:${image}`} />}
      </Helmet>
    </>
  )
}

export default SEO
