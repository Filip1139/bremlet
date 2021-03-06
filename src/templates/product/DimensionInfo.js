import React from "react"
import tw, { styled } from "twin.macro"

export default function DimensionInfo({ title, items, ...restProps }) {
  return (
    <div {...restProps}>
      <h6 tw="text-xl md:text-2xl lg:text-xl mb-6 2xl:text-2xl">{title}</h6>
      {items.map((item) => (
        <div
          key={item.title}
          tw="flex text-xs md:text-base lg:text-base 2xl:text-lg mb-2 lg:mb-0 font-messinaBook"
        >
          <p tw="text-gray-400 mr-2 lg:mr-3 w-2/5 md:w-auto">{item.name}</p>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  )
}
