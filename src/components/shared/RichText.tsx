import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({
      data: {
        target: {
          fields: { file, title },
        },
      },
    }) => {
      return <img alt={title['en']} src={file['en'].url} />
    },
  },
}

const RichText = ({ json }: { json?: string }) =>
  //@ts-ignore
  documentToReactComponents(json, options)
export default RichText
