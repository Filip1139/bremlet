import React from "react"

import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import Nav from "./Nav"

export default function NavMobile({ menu, bg, headerHeight, closeNav }) {
  const handleClick = () => {
    closeNav()
  }

  return (
    <>
      <div
        tw="border-b border-accent-light-gray h-10 absolute inset-x-0 top-0 w-full text-accent-light-gray z-10 flex items-center px-4 justify-between"
        style={{ height: headerHeight }}
      >
        <Link>Logo</Link>

        <span onClick={() => handleClick()}>Zamknij</span>
      </div>
      <Nav menu={menu} background={bg} />
    </>
  )
}
