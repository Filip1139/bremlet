import React from "react"
import Image from "gatsby-image"
import tw from "twin.macro"

export default function PostHero({ bgImg, title, date }) {
  return (
    <section className="post__hero" tw="h-screen relative">
      <div tw="absolute inset-0">
        <Image
          tw=" h-full w-full object-cover"
          fluid={bgImg?.node?.localFile?.childImageSharp?.fluid}
        ></Image>
        <div tw="bg-black absolute inset-0 bg-opacity-50"></div>
      </div>
      <div tw="h-full flex items-center justify-center container mx-auto  z-10 text-white text-center">
        <div tw="pb-20 relative">
          <span tw="mb-3 inline-block text-sm text-gray-200">{date}</span>
          <h1 tw="text-6xl max-w-screen-lg">{title}</h1>
        </div>
      </div>
    </section>
  )
}
