import React from "react"
import Image from "gatsby-image"
import tw from "twin.macro"
import {
  StyledImageWrapper,
  StyledTextWrapper,
} from "../../components/NewCollection/NewCollection.js"

export default function TextImage({ title, subtitle, desc, img }) {
  return (
    <section tw="relative flex flex-col lg:block">
      <div tw="container mx-auto px-4 md:px-10 lg:px-0 ">
        <StyledTextWrapper tw=" lg:pb-40">
          <h4 tw="pt-10 md:pt-20  text-4xl md:text-6xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-1">
            {title}
          </h4>
          <p tw=" text-gray-700 text-lg mt-4 underline md:text-2xl font-messina lg:mt-10 lg:text-base  xl:text-xl 2xl:text-2xl pb-10 ">
            {subtitle}
          </p>
          <p tw="text-gray-400 md:pr-10">{desc}</p>
        </StyledTextWrapper>
      </div>
      <StyledImageWrapper>
        <Image
          tw="h-full object-cover"
          fluid={img.localFile.childImageSharp.fluid}
        ></Image>
      </StyledImageWrapper>
    </section>
  )
}
