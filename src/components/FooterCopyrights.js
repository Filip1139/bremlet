import React from "react"

import tw from "twin.macro"
export default function FooterCopyrights() {
  return (
    <div tw="mt-32 col-span-full text-gray-400 text-xs flex justify-between">
      <p>All rights reserved. © {new Date().getFullYear()} Bremlet</p>

      <p>Site BY ME</p>
    </div>
  )
}
