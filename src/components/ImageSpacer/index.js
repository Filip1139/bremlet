import React from "react"
import tw from "twin.macro"
import Img from "gatsby-image"

export default function ImageSpacer({ fields }) {
  return (
    <section tw="h-screen lg:p-10 xl:p-0">
      <Img
        fluid={fields?.localFile?.childImageSharp?.fluid}
        tw="h-full w-full"
      />
    </section>
  )
}
