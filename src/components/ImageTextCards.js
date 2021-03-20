import React from "react"
import tw, { styled } from "twin.macro"

import bgPattern from "../images/bg-pattern.jpg"

import ImageTextCard from "./ImageTextCard"

export default function ImageTextCards({ fields }) {
  return (
    <section tw="pt-16  lg:py-32" style={{ background: `url(${bgPattern})` }}>
      <div tw="container grid gap-y-8 grid-cols-12 lg:gap-8 px-4 mx-auto md:px-10 xl:px-0">
        {fields.map((box) => (
          <ImageTextCard key={box.boxImg.id} details={box} />
        ))}
      </div>
    </section>
  )
}
