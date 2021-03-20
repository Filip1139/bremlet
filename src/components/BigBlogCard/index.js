import React from "react"
import tw, { styled, css } from "twin.macro"
import Img from "gatsby-image"
import sanitizeHtml from "sanitize-html"
import { Link } from "gatsby"
import { device } from "../MediaQuery"

export default function BigBlogCard({ title, excerpt, img, uri, date }) {
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + "..."
  }
  return (
    <>
      <StyledBox to={uri}>
        <StyledImageWrapper>
          {img && (
            <>
              <Img fluid={img} tw="w-full h-full object-cover" />

              <div tw="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
            </>
          )}
        </StyledImageWrapper>
        <div tw="relative z-10 text-white">
          <span tw="mb-3 inline-block text-xs lg:text-sm text-gray-200">
            {date}
          </span>

          <h3 tw="text-xl xl:text-2xl 2xl:text-4xl font-medium mb-6 hover:text-accent transition-colors">
            {title}
          </h3>

          <p
            tw="text-sm xl:text-base 2xl:text-xl lg:w-11/12 mb-8"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(truncateString(excerpt, 100)),
            }}
          ></p>
          <span tw="border-b-2 border-gray-500 hover:text-accent hover:border-accent transition-colors">
            Czytaj więcej
          </span>
        </div>
      </StyledBox>
    </>
  )
}

const StyledImageWrapper = styled.div`
  ${tw`absolute inset-0 h-full w-full`}
`

const StyledBox = styled(Link)`
  ${tw`relative -mb-8 flex items-end p-4  lg:p-10`}

  grid-column: 1 / -1;
  height: 50vh;
  @media ${device.laptop} {
    height: 30vw;
  }
`
