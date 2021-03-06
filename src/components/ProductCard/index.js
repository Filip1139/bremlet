import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import tw from "twin.macro"
import { StyledCard, StyledImagesWrapper } from "./ProductCard"
import Badge from "../Badge"

export default function ProductCard({
  productInfo,
  cols,
  direction,
  showBadge,
}) {
  const pngImg =
    productInfo?.SingleProduct?.productPng?.localFile?.childImageSharp?.fluid

  const productImg =
    productInfo?.featuredImage?.node?.localFile?.childImageSharp?.fluid

  return (
    <StyledCard cols={cols}>
      {showBadge && <Badge title="new" />}
      <Link tw="mb-3" to={`produkt/${productInfo?.slug}`}>
        <StyledImagesWrapper direction={direction}>
          {pngImg && <Image fluid={pngImg} tw="h-full w-1/2"></Image>}
          {productImg && <Image fluid={productImg} tw="h-full w-1/2"></Image>}
        </StyledImagesWrapper>
      </Link>
      <Link
        to={`${productInfo?.slug}`}
        tw="text-gray-600 font-messina text-sm md:text-2xl lg:text-base"
      >
        {productInfo?.title}
      </Link>
    </StyledCard>
  )
}
