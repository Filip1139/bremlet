import { graphql } from "gatsby"

export const acfLinkFragment = graphql`
  fragment acfLinkFragment on WpACF_Link {
    url
    title
  }
`
