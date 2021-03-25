import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { globalHistory } from "@reach/router"
import { device } from "./MediaQuery"

const path = globalHistory.location.pathname

export default function Nav({ menu: { menuItems }, background }) {
  return (
    <StyledNav>
      <ul tw="flex flex-col xl:flex-row space-y-4 xl:space-y-0  xl:space-x-10">
        {menuItems?.nodes.map((menuItem) => (
          <li key={menuItem.label}>
            <StyledLink itemsColor={background} to={menuItem.url || "/"}>
              {menuItem.label}
            </StyledLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  ${tw`fixed xl:static flex items-center p-4 xl:p-0  inset-0 bg-accent-gray xl:bg-transparent`}
  @media ${device.laptop} {
  }
`

const StyledLink = styled(Link)`
  ${tw`relative text-2xl xl:text-base text-white`}

  &:after {
    content: "";
    ${tw`absolute origin-left transform scale-x-0 -bottom-1 transition-transform duration-300 left-0 w-full h-px bg-white`}

    @media ${device.laptop} {
      ${({ itemsColor }) =>
        itemsColor === "header-transparent" ? tw`bg-white` : tw`bg-accent-gray`}
    }
  }

  &[aria-current],
  &:hover {
    &:after {
      ${tw`scale-x-100`}
    }
  }

  @media ${device.laptop} {
    ${({ itemsColor }) =>
      itemsColor === "header-transparent"
        ? tw`text-white`
        : tw`text-accent-gray`}
  }
`
