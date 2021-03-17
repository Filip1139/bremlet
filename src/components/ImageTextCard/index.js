import React from "react"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"

export default function ImageTextCard({ details }) {
  return (
    <>
      <div tw="col-span-4">
        <StyledImageWrapper>
          <Img
            fluid={details?.boxImg?.localFile?.childImageSharp?.fluid}
            tw="w-full h-full object-cover"
          />
        </StyledImageWrapper>
        <h3 tw="text-4xl font-medium mb-6">{details.title}</h3>
        <p tw="text-gray-500 xl:text-lg 2xl:text-xl lg:w-11/12">
          {details.desc}{" "}
        </p>
      </div>
    </>
  )
}

const StyledImageWrapper = styled.div`
  height: 25vw;
  ${tw`relative mb-10`}
`
