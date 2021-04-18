import React, { useState, useEffect, useRef } from "react"
import Nav from "./Nav"
import logoLight from "../images/logo-light.svg"
import logoDark from "../images/logo-dark.svg"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import { debounce } from "../utilities/helpers"
import { useMediaQuery } from "react-responsive"
import NavMobile from "./NavMobile"

export const Header = React.memo(({ menu }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [bg, setBg] = useState("header-transparent")
  const [logo, setLogo] = useState("light")
  const [headerHeight, setHeaderHeight] = useState(0)
  const [menuVisibility, setMenuVisibility] = useState(false)
  const header = useRef()

  // on scroll behaviour
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset
    if (currentScrollPos > 500) {
      setBg("header-white")
      setLogo("dark")
    } else {
      setBg("header-transparent")
      setLogo("light")
    }
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 40) ||
        currentScrollPos < 10
    )

    setPrevScrollPos(currentScrollPos)
  }, 100)

  const closeNav = () => {
    setMenuVisibility(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    setHeaderHeight(header.current.clientHeight)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  return (
    <>
      <StyledHeader visibility={visible} background={bg} ref={header}>
        <div tw="container text-white flex items-center justify-between">
          <Link to="/">
            <img
              src={logo == "dark" ? logoDark : logoLight}
              tw="py-2 w-16 h-auto  lg:w-16"
              alt="Bremlet woodwork logo"
            />
          </Link>
          {!isDesktopOrLaptop && (
            <span
              css={[
                bg === "header-transparent"
                  ? tw`text-white`
                  : tw`text-accent-gray`,
              ]}
              onClick={() => setMenuVisibility(true)}
            >
              Menu
            </span>
          )}
          {isDesktopOrLaptop && <Nav menu={menu} background={bg} />}
        </div>
      </StyledHeader>

      {!isDesktopOrLaptop && (
        <StyledMobileNavWrapper isOpen={menuVisibility}>
          <NavMobile
            menu={menu}
            bg={bg}
            headerHeight={headerHeight}
            closeNav={closeNav}
          />
        </StyledMobileNavWrapper>
      )}
    </>
  )
})

const StyledHeader = styled.header`
  ${tw`fixed inset-x-0 top-0 z-50 transform duration-300`}
  ${({ visibility }) =>
    visibility ? tw`translate-y-0 ` : tw`-translate-y-full `}

    ${({ background }) =>
    background === "header-white"
      ? tw`bg-white shadow-sm`
      : tw`-bg-transparent shadow-none`}
`

const StyledMobileNavWrapper = styled.div`
  ${tw`z-50 fixed flex items-center p-4  inset-0 bg-accent-gray transform duration-300`}
  ${({ isOpen }) => (isOpen ? tw`translate-x-0` : tw`-translate-x-full`)}
`
