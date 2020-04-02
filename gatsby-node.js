const path = require('path')
const R = require('ramda')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const pageQuery = await graphql(`
    {
      allContentfulHome {
        nodes {
          id
          __typename
          node_locale
        }
      }
    }
  `)

  const pages = R.flatten(
    Object.values(pageQuery.data).map(({ nodes }) => nodes),
  )

  pages.forEach(({ id, __typename, node_locale, slug }) => {
    const type = __typename.replace('Contentful', '').replace('Page', '')
    const newSlug = slug ? `/${slug}` : '/'

    createPage({
      path: newSlug,
      component: path.resolve(`./src/templates/${type}.tsx`),
      context: {
        id,
        node_locale,
      },
    })
  })
}
