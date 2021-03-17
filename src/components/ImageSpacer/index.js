import React from "react"
import tw from "twin.macro"
import Img from "gatsby-image"

export default function ImageSpacer({ fields }) {
  console.log("🚀 ~ file: index.js ~ line 6 ~ ImageSpacer ~ fields", fields)
  return (
    <section tw="h-screen p-10 xl:p-0">
      <Img
        fluid={fields?.localFile?.childImageSharp?.fluid}
        tw="h-full w-full"
      />
    </section>
  )
}
