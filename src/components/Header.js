import React, { useState, useEffect } from "react"
import Nav from "./Nav"
import logo from "../images/logo.png"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import { debounce } from "../utilities/helpers"

export default function Header({ menu }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [bg, setBg] = useState("header-transparent")

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset
    if (currentScrollPos > 500) {
      setBg("header-white")
    } else {
      setBg("header-transparent")
    }
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 40) ||
        currentScrollPos < 10
    )

    setPrevScrollPos(currentScrollPos)
  }, 100)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return (
    <StyledHeader visibility={visible} background={bg}>
      <div tw="container text-white flex items-center md:justify-between">
        <Link to="/">
          <img src={logo} tw="py-2" alt="Bremlet woodwork logo" />
        </Link>

        <Nav menu={menu} background={bg} />
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  ${tw`fixed inset-x-0 top-0 z-50 transform duration-300`}
  ${({ visibility }) =>
    visibility ? tw`translate-y-0 ` : tw`-translate-y-full `}

    ${({ background }) =>
    background === "header-white"
      ? tw`bg-white shadow-sm`
      : tw`-bg-transparent shadow-none`}
`
