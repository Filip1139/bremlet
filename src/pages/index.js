import React from "react"
import Hero from "../components/Hero/index"
import { graphql } from "gatsby"
import OverlapImages from "../components/OverlapImages"
import tw from "twin.macro"
import NewCollection from "../components/NewCollection"
import NewProductsGrid from "../components/NewProductsGrid"
import TextWithThreeImgs from "../components/TextWithThreeImgs"
import CollectionJumbo from "../components/CollectionJumbo"
import SEO from "../components/seo"

// import SEO from "../components/seo"

export default function Index({ data: { home, products } }) {
  const {
    HomeACF: { collection, collectionSecond, textImgGroup, collectionCta },
  } = home

  return (
    <>
      <SEO title={home.seo.title} description={home.seo.metaDesc} />
      <Hero fields={home} />
      <OverlapImages fields={home} />
      <NewCollection fields={collection} />
      <NewProductsGrid fields={products.nodes} title="Nowe produkty" />
      <NewCollection fields={collectionSecond} direction="row-reverse" />
      <TextWithThreeImgs fields={textImgGroup} showLogo bigPadding />
      <CollectionJumbo fields={collectionCta} />
    </>
  )
}

export const query = graphql`
  {
    home: wpPage(slug: { eq: "strona-glowna" }) {
      seo {
        ...SeoFragment
      }
      HomeACF {
        heroHeading
        heroBg {
          ...acfImageFragment
        }
        heroBgMobile {
          ...acfImageFragment
        }
        heroCta {
          ...acfLinkFragment
        }
        overlapBtn {
          ...acfLinkFragment
        }
        overlapImg1 {
          ...acfImageFragment
        }
        overlapImg2 {
          ...acfImageFragment
        }
        overlapText

        collection {
          ...collections
        }
        collectionSecond {
          ...collectionsSecond
        }
        textImgGroup {
          img {
            ...acfImageFragment
          }
          img2 {
            ...acfImageFragment
          }
          img3 {
            ...acfImageFragment
          }
          text
        }

        collectionCta {
          text
          textAccent
          title
          img {
            ...acfImageFragment
          }
        }
      }
    }
    products: allWpProdukt(limit: 6, sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        slug
        SingleProduct {
          productPng {
            ...acfImageFragment
          }
        }
        featuredImage {
          node {
            ...acfImageFragment
          }
        }
      }
    }
  }
`
