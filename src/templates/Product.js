import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import { useMediaQuery } from "react-responsive"

import SingleProductImages from "../components/SingleProductImages"
import SingleProductInfo from "./product/SingleProductInfo"
import SingleImageSlider from "../components/SingleImageSlider"

// import SEO from "../components/seo"

import bgPattern from "../images/bg-pattern.jpg"
import TextImage from "./product/TextImage"
import ProductDetails from "./product/ProductDetails"
import RelatedItems from "./product/RelatedItems"
import ImageCTA from "./product/ImageCTA"
import SEO from "../components/seo"

export default function Product({ data }) {
  const {
    product: { SingleProduct, title, date, slug, seo },
  } = data

  const [imagesRefs, setImagesRefs] = useState([])
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

  const getRefs = (refs) => {
    setImagesRefs(refs)
  }
  useEffect(() => {
    document.body.classList.add("header-bg-dark")

    return () => {
      document.body.classList.remove("header-bg-dark")
    }
  })

  const renderProductImages = () => {
    const currentComponent = isTabletOrMobile ? (
      <SingleImageSlider images={SingleProduct?.gallery} />
    ) : (
      <SingleProductImages images={SingleProduct?.gallery} getRefs={getRefs} />
    )
    return currentComponent
  }

  return (
    <>
      <SEO description={seo.metaDesc} title={seo.title} />
      <article className={`product-${slug}`}>
        <StyledProductIntroGrid>
          {renderProductImages()}

          <SingleProductInfo
            productInfo={SingleProduct}
            imagesRefs={imagesRefs}
            date={date}
            title={title}
          />
        </StyledProductIntroGrid>

        {SingleProduct.textImage && <TextImage {...SingleProduct.textImage} />}

        <ProductDetails
          demensions={SingleProduct.demensions}
          details={SingleProduct.details}
          bgImage={SingleProduct.detailsImg}
        />
        {SingleProduct.crossProducts && (
          <RelatedItems items={SingleProduct.crossProducts} />
        )}

        {SingleProduct.imageCta && <ImageCTA {...SingleProduct.imageCta} />}
      </article>
    </>
  )
}

const StyledProductIntroGrid = styled.div`
  background: url(${bgPattern});
  ${tw`grid-cols-1 gap-4 pb-10 lg:pb-20 lg:grid lg:grid-cols-12`}
`

export const query = graphql`
  query($slug: String!) {
    product: wpProdukt(slug: { eq: $slug }) {
      seo {
        ...SeoFragment
      }
      date(difference: "days")
      title
      slug

      SingleProduct {
        productDetails {
          productDesc
          productDetails
          productExtra
        }
        textImage {
          title
          subtitle
          desc
          img {
            ...acfImageFragment
          }
        }
        crossProducts {
          ... on WpProdukt {
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
        detailsImg {
          ...acfImageFragment
        }
        demensions {
          title
          row1 {
            name
            value
          }
        }
        details {
          title
          row {
            name
            value
          }
        }
        gallery {
          localFile {
            childImageSharp {
              id
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
        imageCta {
          bg {
            ...acfImageFragment
          }
          text
          link {
            title
            url
          }
        }
      }
    }
  }
`
