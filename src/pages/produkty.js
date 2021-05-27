import React from "react"
import { graphql } from "gatsby"
import tw, { styled } from "twin.macro"

import ProductCard from "../components/ProductCard"
import HeroImg from "../components/HeroImg"

import SEO from "../components/seo"

export default function Index({ data: { products, page } }) {
  const bgImage =
    page?.featuredImage?.node?.localFile?.childImageSharp?.fluid?.src

  const { heroHeading, heroDesc } = page.Products_ACF.productsAcf
  return (
    <>
      <SEO title={page.seo.title} description={page.seo.metaDesc} />
      <HeroImg src={bgImage} title={heroHeading} desc={heroDesc} />
      <section tw="pt-20 bg-accent-light-gray">
        <div tw="container mx-auto px-4 md:px-10 lg:px-0">
          <h3 tw="text-4xl mb-10 font-messinaBook text-accent-gray">
            Wszystkie produkty
          </h3>
          <StyledGrid>
            {products.nodes.map((product, idx) => (
              <ProductCard
                productInfo={product}
                cols={idx === 2 ? 6 : 3}
                direction={idx !== 2 && "reverse"}
              />
            ))}
          </StyledGrid>
        </div>
      </section>
    </>
  )
}

const StyledGrid = styled.div`
  ${tw`grid grid-cols-12 gap-6`}
`

export const query = graphql`
  {
    page: wpPage(slug: { eq: "produkty" }) {
      seo {
        ...SeoFragment
      }
      Products_ACF {
        productsAcf {
          heroHeading
          heroDesc
        }
      }
      featuredImage {
        node {
          ...acfImageFragment
        }
      }
    }
    products: allWpProdukt(limit: 9999, sort: { fields: date, order: DESC }) {
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
