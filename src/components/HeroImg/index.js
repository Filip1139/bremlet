import React from "react"
import tw, { styled } from "twin.macro"
import Image from "gatsby-image"

import { device } from "../MediaQuery"

export default function HeroImg({ src, desc }) {
  return (
    <StyledSection tw="relative" src={src}>
      <div tw="z-10 px-4">
        <h2 tw="uppercase">Nasza oferta</h2>
        <p tw="text-center text-lg lg:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          consequuntur at necessitatibus provident. Cumque, quos?
        </p>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  height: 60vh;
  background: url(${({ src }) => src && src}) center / cover;
  ${tw`flex items-center justify-center text-center text-white font-messinaBook`}

  &:before {
    content: "";
    ${tw`absolute inset-0 w-full h-full bg-accent-gray bg-opacity-40`}
  }
  h2 {
    font-size: 12vw;
    margin-bottom: 16px;
  }
  @media ${device.laptop} {
    height: 60vh;
    h2 {
      margin-bottom: 0;
      font-size: 8vw;
    }
    p {
      margin: 0 auto;
      max-width: 80vw;
    }
  }
`
