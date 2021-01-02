import React from 'react'
import SectionText from '../SectionText'
import SectionImage from '../SectionImage'
import SectionTextVideo from '../SectionTextVideo'
import SectionBridget from '../SectionBridget'
import SectionImageStatic from '../SectionImageStatic'
import SectionTenThousandYears from '../SectionTenThousandYears'
import SectionParallax from '../SectionParallax'
import SectionFaye from '../SectionFaye'

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
    case 'ContentfulSectionImageStatic':
      return <SectionImageStatic data={data} />
    case 'ContentfulSectionTenThousandYears':
      return <SectionTenThousandYears data={data} />
    case 'ContentfulSectionParallax':
      return <SectionParallax data={data} />
    case 'ContentfulSectionFaye':
      return <SectionFaye data={data} />
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
