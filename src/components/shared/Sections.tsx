import React from 'react'
import SectionText from '../SectionText'

const Sections = ({ type, data }) => {
  switch (type) {
    case 'ContentfulSectionText':
      return <SectionText data={data} />
    case 'ContentfulSectionImage':
      return null
    default:
      return <span>{type}</span>
  }
}

export const renderSections = sections => {
  if (sections) {
    return sections?.map((data, i) => {
      return (
        <React.Fragment key={data.__typename + i}>
          <Sections type={data.__typename} data={data} />
        </React.Fragment>
      )
    })
  }
}
