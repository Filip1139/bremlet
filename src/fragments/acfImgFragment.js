import { graphql } from "gatsby"

export const acfImageFragment = graphql`
  fragment acfImageFragment on WpMediaItem {
    localFile {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
