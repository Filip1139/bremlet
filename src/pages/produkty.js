import React from "react"
import { graphql } from "gatsby"
import tw, { styled } from "twin.macro"

import ProductCard from "../components/ProductCard"
import HeroImg from "../components/HeroImg"

import bg from "../images/collection-bg.jpg"

// import SEO from "../components/seo"

export default function Index({ data: { products } }) {
  console.log(bg)
  return (
    <>
      <HeroImg
        src={bg}
        title="Nasza oferta"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          consequuntur at necessitatibus provident. Cumque, quos?"
      />
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
