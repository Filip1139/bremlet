import React from "react"
import {
  StyledSection,
  StyledContainer,
  StyledBiggerImage,
  StyledSmallerImage,
} from "./OverlapImages"
import tw from "twin.macro"
import Button from "../Button"
import sanitizeHtml from "sanitize-html"

export default function OverlapImages({ fields: { HomeACF } }) {
  const { overlapBtn, overlapImg1, overlapImg2, overlapText } = HomeACF

  return (
    <StyledSection>
      <StyledContainer>
        <div tw="col-span-full lg:col-span-6 pt-16 px-4 md:px-10 lg:px-0">
          <h6
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(overlapText),
            }}
          ></h6>
          <Button
            tw="mt-20"
            variant="dark"
            to={overlapBtn.url}
            title={overlapBtn.title}
          />
        </div>

        <div tw="col-span-full lg:col-start-7 lg:col-end-13 pt-16 relative ">
          <StyledBiggerImage
            fluid={overlapImg1.localFile.childImageSharp.fluid}
          ></StyledBiggerImage>
          <StyledSmallerImage
            fluid={overlapImg2.localFile.childImageSharp.fluid}
          ></StyledSmallerImage>
        </div>
      </StyledContainer>
    </StyledSection>
  )
}
