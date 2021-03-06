import React from "react"
import tw, { styled } from "twin.macro"
export default function Badge({ title, ...restProps }) {
  return <StyledBadge {...restProps}>{title}</StyledBadge>
}

const StyledBadge = styled.div`
  ${tw`bg-white uppercase px-1 py-0.5 inline-block absolute text-xxs md:text-base lg:text-sm text-gray-500 z-10 right-4 top-4`}
`
