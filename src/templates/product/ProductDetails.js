import React from "react"
import tw, { styled } from "twin.macro"

import Image from "gatsby-image"

import DimensionInfo from "./DimensionInfo"
import { device } from "../../components/MediaQuery"

export default function ProductDetails({ demensions, details, bgImage }) {
  return (
    <section tw="relative">
      <div tw="container mx-auto px-4 md:px-10 lg:px-0 ">
        <div tw="w-full lg:w-1/2 pb-10 xl:pb-20 2xl:pb-32">
          <StyledTextWrapper>
            <h4>
              Wymiary <br />
              <span tw="uppercase text-sm 2xl:text-lg text-gray-500 mr-2 inline-block">
                oraz
              </span>
              <span tw="text-gray-500">Szczegóły</span>
            </h4>
          </StyledTextWrapper>

          <StyledDynamicRowsWrapper>
            <DimensionInfo
              title={demensions.title}
              items={demensions.row1}
              tw="mb-8"
            />
            <DimensionInfo title={details.title} items={details.row} />
          </StyledDynamicRowsWrapper>
        </div>
      </div>

      <StyledImageWrapper>
        <Image
          tw="h-full object-cover"
          fluid={bgImage?.localFile?.childImageSharp?.fluid}
        ></Image>
      </StyledImageWrapper>
    </section>
  )
}

const StyledImageWrapper = styled.div`
  ${tw`top-0 bottom-0 right-0 w-full h-full lg:w-1/2 lg:absolute bg-accent-light-gray`}
`

const StyledTextWrapper = styled.div`
  h4 {
    ${tw`pt-10 mb-1 text-3xl md:pt-20 md:text-6xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-messinaBook`}
    padding-bottom: 50px;
    @media ${device.laptop} {
      padding-bottom: 40vh;
    }
    @media ${device.large} {
      padding-bottom: 30vh;
    }
  }
`

const StyledDynamicRowsWrapper = styled.div``
