import React from "react"
import Image from "gatsby-image"

import tw, { css } from "twin.macro"
export default function TwoImagesText({ fields, ...restProps }) {
  return (
    <section css={[tw`bg-accent-light-gray`]} {...restProps}>
      <div tw="container mx-auto flex ">
        <div tw="w-full lg:w-1/2">
          <Image
            fluid={fields?.bigImg?.localFile?.childImageSharp?.fluid}
            tw="h-full"
          />
        </div>
        <div tw="w-full lg:w-1/2 xl:pl-24 2xl:pl-52">
          <p tw="text-gray-500 text-lg">{fields.desc}</p>
          <Image
            fluid={fields?.smallImg?.localFile?.childImageSharp?.fluid}
            tw="mt-52 transform translate-y-40"
          />
        </div>
      </div>
    </section>
  )
}
