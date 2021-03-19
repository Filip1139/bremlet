import React from "react"
import tw, { styled } from "twin.macro"
import sanitizeHtml from "sanitize-html"
export default function TextRow({ num, title, desc }) {
  return (
    <div tw="flex flex-col lg:flex-row lg:space-x-10  mb-10 last:m-0">
      <div tw="w-full lg:w-1/3 mb-5 lg:mb-0">
        <h6 tw="text-gray-500 text-sm">Sekcja {num + 1}</h6>
        <h5 tw="text-2xl ">{title}</h5>
      </div>
      <div
        tw="w-full lg:w-2/3 text-gray-500"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(desc),
        }}
      ></div>
    </div>
  )
}
