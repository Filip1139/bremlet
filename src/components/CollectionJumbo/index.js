import React from "react"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { ParallaxBanner } from "react-scroll-parallax"

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
      <ParallaxBanner
        layers={[
          {
            image: fields.img.localFile.childImageSharp.fluid.src,
            amount: 0.1,
          },
        ]}
        style={{ height: "100%" }}
        tw="h-full w-full absolute! inset-0 object-cover"
      ></ParallaxBanner>
      {/* <Img
        fluid={fields.img.localFile.childImageSharp.fluid}
        tw="h-full w-full absolute! inset-0 object-cover"
      ></Img> */}
      <StyledContainer>
        <StyledHeading>{fields.title}</StyledHeading>
        <div tw="flex flex-col text-right xl:pr-10">
          <StyledHeading>
            <span tw="lg:relative">
              {fields.text}
              <DoodleAccent />
            </span>
            {fields.textAccent}
          </StyledHeading>
        </div>
      </StyledContainer>
      <StyledBtnWrapper>
        <Button variant="white-bg" to="#" title="Explore" tw="my-10" />
      </StyledBtnWrapper>
    </section>
  )
}
