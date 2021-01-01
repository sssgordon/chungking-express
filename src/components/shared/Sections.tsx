import React from 'react'
import SectionText from '../SectionText'
import SectionImage from '../SectionImage'
import SectionTextVideo from '../SectionTextVideo'
import SectionBridget from '../SectionBridget'

const Sections = ({ type, data }) => {
  switch (type) {
    case 'ContentfulSectionText':
      return <SectionText data={data} />
    case 'ContentfulSectionImage':
      return <SectionImage data={data} />
    case 'ContentfulSectionTextVideo':
      return <SectionTextVideo data={data} />
    case 'ContentfulSectionBridget':
      return <SectionBridget data={data} />
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
