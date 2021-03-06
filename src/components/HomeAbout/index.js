import React from "react"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import DOMPurify from "dompurify"

import {
  StyledSection,
  StyledFirstImage,
  StyledSecondImage,
  StyledThirdImage,
  StyledBigText,
} from "./HomeAbout"
import logo from "../../images/logo.png"

export default function HomeAbout({ fields }) {
  const getImageUrl = (image) => {
    return fields[image].localFile.childImageSharp.fluid
  }

  return (
    <StyledSection>
      <div tw="container mx-auto relative lg:pb-40">
        <StyledFirstImage>
          <Img fluid={getImageUrl("img")} />
        </StyledFirstImage>
        <StyledSecondImage>
          <Img fluid={getImageUrl("img2")} />
        </StyledSecondImage>

        <StyledThirdImage>
          <Img fluid={getImageUrl("img3")} />
        </StyledThirdImage>

        <img tw="mx-auto" src={logo} alt="" />
        <StyledBigText
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(fields.text),
          }}
        ></StyledBigText>
      </div>
    </StyledSection>
  )
}
