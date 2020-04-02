import React from 'react'
import { Link } from 'gatsby'

const LinkTool = props => {
  return <Link {...props}>{props.children}</Link>
}

export default LinkTool
