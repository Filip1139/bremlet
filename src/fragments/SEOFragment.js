import { graphql } from "gatsby"

export const SeoFragment = graphql`
  fragment SeoFragment on WpPostTypeSEO {
    canonical
    title
    metaDesc
    metaRobotsNoindex
    metaRobotsNofollow
    opengraphAuthor
    opengraphDescription
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
    }
    opengraphUrl
    opengraphSiteName
    opengraphPublishedTime
    opengraphModifiedTime
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
    }
  }
`
