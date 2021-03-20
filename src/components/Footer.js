import React from "react"
import ImagesSlider from "./ImagesSlider"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import logo from "../images/logo-white.png"

import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import FooterCopyrights from "./FooterCopyrights"
import Newsletter from "./Newsletter"

export default function Footer({ gallery, menus }) {
  const galleryItems = gallery?.nodes[0]?.opcjeMotywu?.PageOptions?.gallery

  return (
    <>
      <section>
        <ImagesSlider slides={galleryItems} heading="Galeria Bremlet" />
      </section>
      <Newsletter />

      <footer tw="bg-accent-gray pb-10 pt-10 lg:pt-20">
        <div tw="container px-4 lg:px-0 mx-auto grid gap-4 grid-cols-1  lg:grid-cols-12 relative">
          <div tw="lg:col-span-4 mb-2 md:mb-8 lg:mb-0">
            <Link to="/">
              <img
                src={logo}
                tw="py-2 mb-2 md:mb-4  w-1/5 "
                alt="Bremlet woodwork logo"
              />
            </Link>
            <div tw="flex flex-col text-sm md:text-3xl lg:text-sm 2xl:text-lg">
              <div tw="flex mb-2">
                <span tw="text-gray-400 lg:w-36 2xl:w-auto">Napsz do nas:</span>
                <a tw="text-white ml-2" href="mailto:test@wp.pl">
                  test@wp.pl
                </a>
              </div>
              <div tw="flex">
                <span tw="text-gray-400 lg:w-36 2xl:w-auto">
                  Zadzwoń do nas:
                </span>
                <a tw="text-white ml-2" href="tel:322222222">
                  333 333 333
                </a>
              </div>
            </div>
          </div>

          {menus?.nodes?.map((menu) => (
            <div
              tw="col-span-full lg:col-span-2 text-sm md:text-3xl md:mb-3 lg:mb-0 lg:text-sm 2xl:text-lg"
              key={menu.id}
            >
              <StyledColTitle>{menu.name}</StyledColTitle>
              <ul tw="text-gray-400">
                {menu?.menuItems?.nodes?.map((item) => (
                  <li tw="mb-2" key={item.id}>
                    <StyledFooterLink to={item.url}>
                      {item.label}
                    </StyledFooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div tw="absolute top-4  md:top-0 right-4 flex">
            <StyledIconWrapper href="#" tw="mr-2">
              <FaFacebookSquare />
            </StyledIconWrapper>
            <StyledIconWrapper href="#">
              <FaInstagram />
            </StyledIconWrapper>
          </div>
          <FooterCopyrights />
        </div>
      </footer>
    </>
  )
}

const StyledColTitle = styled.p`
  ${tw`mb-4 text-white`}
`

const StyledFooterLink = styled(Link)`
  ${tw`relative`}
  &:after {
    content: "";

    ${tw`absolute bottom-0 left-0 w-full transition-transform duration-500 origin-left transform scale-x-0 bg-gray-400 h-base`}
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  }
  &:hover {
    &:after {
      ${tw`scale-x-100`}
    }
  }
`

const StyledIconWrapper = styled.a`
  ${tw`text-lg text-gray-400 2xl:text-xl`}
`
