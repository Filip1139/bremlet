import tw, { styled } from "twin.macro"
import { device } from "../MediaQuery"

export const StyledSection = styled.section`
  ${tw`py-10 bg-accent-light-gray xl:py-20`}
`

export const StyledContainer = styled.div`
  ${tw`container relative flex items-center justify-center mx-10 text-center xl:mx-auto`}

  height: 150vw;
  @media ${device.laptop} {
    height: 150vw;
  }

  .long-img__wrapper {
    ${tw`absolute h-full inset-4`}
  }
  .long-img__text-wrapper {
    ${tw`relative z-10 w-3/4 text-center text-white`}
    img {
      ${tw`w-20 mx-auto mb-10 xl:w-40`}
    }
    p {
      ${tw`text-2xl xl:text-6xl`}
    }
  }
`
