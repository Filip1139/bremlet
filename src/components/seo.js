// This is adapted directly from the official gatsby-starter-default
// https://github.com/gatsbyjs/gatsby-starter-default
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { allSite } = useStaticQuery(
    graphql`
      query {
        allSite {
          nodes {
            siteMetadata {
              description
              title
            }
          }
        }
      }
    `
  )
  const metaDescription =
    description || allSite.nodes[0].siteMetadata.description

  const pageTitle = title || allSite.nodes[0].siteMetadata.title
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={pageTitle ? `%s | ${pageTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pl`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
