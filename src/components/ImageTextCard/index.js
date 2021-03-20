import React from "react"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { device } from "../MediaQuery"

export default function ImageTextCard({ details }) {
  return (
    <>
      <div tw="col-span-full lg:col-span-4">
        <StyledImageWrapper>
          <Img
            fluid={details?.boxImg?.localFile?.childImageSharp?.fluid}
            tw="w-full h-full object-cover"
          />
        </StyledImageWrapper>
        <h3 tw="text-3xl xl:text-4xl font-medium mb-6">{details.title}</h3>
        <p tw="text-gray-500 xl:text-lg 2xl:text-xl lg:w-11/12">
          {details.desc}
        </p>
      </div>
    </>
  )
}

const StyledImageWrapper = styled.div`
  ${tw`relative mb-5 lg:mb-10 h-72`}

  @media ${device.laptop} {
    height: 25vw;
  }
`
