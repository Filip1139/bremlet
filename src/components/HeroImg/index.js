import React from "react"
import tw, { styled } from "twin.macro"
import Image from "gatsby-image"

import { device } from "../MediaQuery"

export default function HeroImg({ src, desc, title }) {
  return (
    <StyledSection tw="relative" src={src}>
      <div tw="absolute inset-0 bg-black bg-opacity-30"></div>
      <div tw="z-10 h-full container relative flex flex-col w-full px-4 mx-auto text-white justify-center md:px-10 xl:px-0">
        <h2>{title}</h2>
        {desc && (
          <p tw=" text-lg lg:text-2xl max-w-6xl  text-gray-200">{desc}</p>
        )}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  height: 60vh;
  background: url(${({ src }) => src && src}) center / cover;

  &:before {
    content: "";
    ${tw`absolute inset-0 w-full h-full bg-accent-gray bg-opacity-40`}
  }
  h2 {
    font-size: 12vw;
    margin-bottom: 16px;
  }
  @media ${device.laptop} {
    height: 70vh;
    h2 {
      margin-bottom: 0;
      font-size: 7vw;
    }
  }
`
