import { graphql } from "gatsby"

export const collectionsSecond = graphql`
  fragment collectionsSecond on WpPage_Homeacf_CollectionSecond {
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
