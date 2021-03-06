import { graphql } from "gatsby"

export const collections = graphql`
  fragment collections on WpPage_Homeacf_Collection {
    collectionNam
    collectionDesc
    collectionLink {
      title
      url
    }
    collectionImg {
      ...acfImageFragment
    }
  }
`
