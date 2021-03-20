import React from "react"
import tw, { styled, css } from "twin.macro"
import Img from "gatsby-image"
import sanitizeHtml from "sanitize-html"
import { Link } from "gatsby"

import { device } from "../MediaQuery"

export default function BlogCard({
  title,
  excerpt,
  img,
  columns = 3,
  uri,
  date,
}) {
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + "..."
  }

  return (
    <>
      <StyledBox columns={columns}>
        <StyledImageWrapper>
          {img && (
            <Link to={uri}>
              <Img fluid={img} tw="w-full h-full object-cover" />
            </Link>
          )}
        </StyledImageWrapper>
        <div>
          <span tw="mb-2 text-sm inline-block text-gray-400">{date}</span>
          <Link to={uri}>
            <h3 tw="xl:text-2xl 2xl:text-4xl font-medium mb-6 hover:text-accent transition-colors">
              {title}
            </h3>
          </Link>
          <p
            tw="text-gray-500 xl:text-base 2xl:text-xl lg:w-11/12 mb-8"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(truncateString(excerpt, 100)),
            }}
          ></p>
          <Link
            to={uri}
            tw="border-b-2 border-gray-500 hover:text-accent hover:border-accent transition-colors"
          >
            Czytaj więcej
          </Link>
        </div>
      </StyledBox>
    </>
  )
}

const StyledImageWrapper = styled.div`
  ${tw`h-72`}
  @media ${device.laptop} {
    height: 25vw;
  }
  ${tw`relative mb-10`}
`
const StyledBox = styled.div`
  grid-column: 1 / -1;
  @media ${device.tablet} {
    grid-column: span 6;
  }
  @media ${device.laptop} {
    ${({ columns }) => columns && `grid-column: span  ${12 / columns}`}
  }
`
