import { graphql } from "gatsby"

export const acfFixedImageFragment = graphql`
  fragment acfFixedImageFragment on WpMediaItem {
    localFile {
      childImageSharp {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
