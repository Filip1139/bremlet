import React from "react"
import Image from "gatsby-image"
import tw, { styled } from "twin.macro"
import sanitizeHtml from "sanitize-html"
import Button from "../Button"
import { device } from "../MediaQuery"

export default function HeroSubpage({ fields }) {
  return (
    <section tw="h-screen relative flex pb-10 lg:pb-0 items-end lg:items-center">
      <div tw="absolute inset-0 z-0">
        <Image
          fluid={fields?.bgImg?.localFile?.childImageSharp?.fluid}
          tw="h-full"
        />
        <div tw="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <StyledContainer>
        <div>
          <h1>{fields.heading}</h1>
          <h6
            tw="max-w-6xl"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(fields.desc),
            }}
          ></h6>
        </div>
      </StyledContainer>
    </section>
  )
}

const StyledContainer = styled.div`
  ${tw`container relative z-10 flex flex-col w-full px-4 mx-auto text-white align-bottom md:px-10 xl:px-0 lg:items-end lg:justify-between lg:flex-row`}
  h1 {
    ${tw`mb-8 text-4xl xl:mb-4 leading-none`}
    @media ${device.laptop} {
      font-size: 7vw;
    }
    @media ${device.large} {
      font-size: 5vw;
    }
  }
  h6 {
    ${tw`text-base lg:text-2xl text-gray-200`}
  }
`
