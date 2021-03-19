import React from "react"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import sanitizeHtml from "sanitize-html"

import {
  StyledSection,
  StyledFirstImage,
  StyledSecondImage,
  StyledThirdImage,
  StyledBigText,
  StyledDesc,
} from "./TextWithThreeImgs"
import logo from "../../images/logo.png"

export default function TextWithThreeImgs({
  fields,
  imgFieldsName = ["img", "img2", "img3"],
  showLogo = false,
  bigPadding = false,
  variant,
}) {
  const getImageUrl = (image) => {
    console.log(fields["img"])
    return fields[image]?.localFile?.childImageSharp?.fluid
  }

  return (
    <StyledSection bigPadding={bigPadding}>
      <div tw="container mx-auto relative lg:pb-40 lg:pt-32 text-center">
        {showLogo && <img tw="mx-auto" src={logo} alt="" />}
        <StyledBigText
          componentHasDesc={fields.desc}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(fields.text),
          }}
        ></StyledBigText>
        {fields.desc && (
          <StyledDesc
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(fields.desc),
            }}
          ></StyledDesc>
        )}
      </div>

      <StyledFirstImage bigPadding={bigPadding} variant={variant}>
        <Img fluid={getImageUrl(imgFieldsName[0])} tw="h-full object-cover" />
      </StyledFirstImage>
      <StyledSecondImage variant={variant}>
        <Img fluid={getImageUrl(imgFieldsName[1])} tw="h-full object-cover" />
      </StyledSecondImage>
      <StyledThirdImage componentHasDesc={fields.desc} variant={variant}>
        <Img fluid={getImageUrl(imgFieldsName[2])} tw="h-full object-cover" />
      </StyledThirdImage>
    </StyledSection>
  )
}
