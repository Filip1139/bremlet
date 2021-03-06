import React from "react"
import Image from "gatsby-image"
import tw from "twin.macro"
import { StyledImageWrapper, StyledTextWrapper } from "./NewCollection"

import Button from "../Button"

export default function NewCollection({ fields, direction = "row" }) {
  const {
    collectionNam,
    collectionDesc,
    collectionLink,
    collectionImg,
  } = fields

  return (
    <section tw="relative flex flex-col-reverse lg:block">
      <div tw="container mx-auto px-4 md:px-10 lg:px-0 ">
        <StyledTextWrapper direction={direction}>
          <h4 tw="pt-10 md:pt-20  text-2xl md:text-6xl lg:text-2xl 2xl:text-4xl mb-1">
            {collectionNam}
          </h4>
          <p tw="uppercase text-gray-400 text-sm md:text-3xl font-messina md:mt-4 lg:mt-0 lg:text-sm pb-10 lg:pb-48">
            NOWA KOLEKCJA
          </p>
          <p tw="text-gray-400 md:pr-10">{collectionDesc}</p>
          <Button
            tw="mt-20"
            variant="gray"
            to={collectionLink.url}
            title={collectionLink.title}
          />
        </StyledTextWrapper>
      </div>
      <StyledImageWrapper direction={direction}>
        <Image
          tw="h-full object-cover"
          fluid={collectionImg.localFile.childImageSharp.fluid}
        ></Image>
      </StyledImageWrapper>
    </section>
  )
}
