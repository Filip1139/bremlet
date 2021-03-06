import React from "react"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"

import Button from "../Button"
import DoodleAccent from "../DoodleAccent"
import {
  StyledContainer,
  StyledHeading,
  StyledBtnWrapper,
} from "./CollectionJumbo"

export default function CollectionJumbo({ fields }) {
  return (
    <section tw="relative z-0">
      <Img
        fluid={fields.img.localFile.childImageSharp.fluid}
        tw="h-full w-full absolute! inset-0 object-cover"
      ></Img>
      <StyledContainer>
        <StyledHeading>{fields.title}</StyledHeading>
        <div tw="flex flex-col text-right xl:pr-10">
          <StyledHeading>
            {fields.text}
            <span tw="lg:relative">
              <DoodleAccent />
              {fields.textAccent}
            </span>
          </StyledHeading>
        </div>
      </StyledContainer>
      <StyledBtnWrapper>
        <Button variant="white-bg" to="#" title="Explore" tw="my-10" />
      </StyledBtnWrapper>
    </section>
  )
}
