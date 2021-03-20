import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { globalHistory } from "@reach/router"

const path = globalHistory.location.pathname

export default function Nav({ menu: { menuItems }, background }) {
  return (
    <nav>
      <ul tw="flex space-x-10">
        {menuItems?.nodes.map((menuItem) => (
          <li key={menuItem.label}>
            <StyledLink itemsColor={background} to={menuItem.url || "/"}>
              {menuItem.label}
            </StyledLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const StyledLink = styled(Link)`
  ${tw`relative`}
  &:after {
    content: "";
    ${tw`absolute origin-left transform scale-x-0 -bottom-1 transition-transform duration-300 left-0 w-full h-px `}
    ${({ itemsColor }) =>
      itemsColor === "header-transparent" ? tw`bg-white` : tw`bg-accent-gray`}
  }
  &[aria-current],
  &:hover {
    &:after {
      ${tw`scale-x-100`}
    }
  }

  ${({ itemsColor }) =>
    itemsColor === "header-transparent" ? tw`text-white` : tw`text-accent-gray`}
`
