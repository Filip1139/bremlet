import React from "react"
import tw, { styled } from "twin.macro"
import Image from "gatsby-image"
import Button from "../../components/Button"
import { device } from "../../components/MediaQuery"

export default function ImageCTA({ bg, text = "CTA TEXT", link }) {
  return (
    <section tw="py-32 lg:py-0 md:h-screen flex relative items-center justify-center px-10">
      <div tw="absolute inset-0 z-0 ">
        <Image
          tw="h-full object-cover"
          fluid={bg.localFile.childImageSharp.fluid}
        ></Image>
      </div>

      <div tw="text-white text-center z-10 w-full lg:w-auto">
        <StyledTitle>{text}</StyledTitle>

        <Button
          tw=" mt-20 md:mt-36 lg:mt-20 mx-auto 2xl:mt-10"
          variant="white-bg"
          to={link?.url}
          title={link.title}
        />
      </div>
    </section>
  )
}

const StyledTitle = styled.h5`
  font-size: 15vw;
  @media ${device.tablet} {
    font-size: 20vw;
  }
  @media ${device.laptop} {
    font-size: 10vw;
  }
`
