import React from "react"
import Image from "gatsby-image"

import tw, { css } from "twin.macro"
export default function TwoImagesText({ fields, ...restProps }) {
  return (
    <section css={[tw`bg-accent-light-gray`]} {...restProps}>
      <div tw="container mx-auto flex flex-col lg:flex-row ">
        <div tw="w-full lg:w-1/2 mb-10 lg:mb-0">
          <Image
            fluid={fields?.bigImg?.localFile?.childImageSharp?.fluid}
            tw="h-72  lg:h-full"
          />
        </div>
        <div tw="w-full lg:w-1/2 xl:pl-24 2xl:pl-52">
          <p tw="text-gray-500 text-lg text-center lg:text-left">
            {fields.desc}
          </p>
          <Image
            fluid={fields?.smallImg?.localFile?.childImageSharp?.fluid}
            tw="lg:mt-52 transform translate-y-20 lg:translate-y-40"
          />
        </div>
      </div>
    </section>
  )
}
