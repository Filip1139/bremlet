import tw, { styled } from "twin.macro"
import { device } from "../MediaQuery"

export const StyledContainer = styled.div`
  ${tw`container relative z-10 flex flex-col justify-center px-4 pt-40 pb-40 mx-auto text-white lg:h-screen lg:justify-between lg:px-0 lg:pb-40 2xl:pb-48`}
  min-height: 80vh;
  @media ${device.wide} {
    min-height: 123vh;
  }
`

export const StyledHeading = styled.h4`
  ${tw`relative mb-2 text-4xl leading-normal uppercase md:text-8xl lg:text-9xl lg:mb-0 lg:static`}
  @media ${device.tablet} {
    font-size: 8.9372vw;
  }
  @media ${device.large} {
    font-size: 8.33333vw;
  }
`

export const StyledBtnWrapper = styled.div`
  ${tw`absolute left-0 z-10 justify-center w-full px-4 transform md:flex lg:mx-auto bottom-4 lg:w-auto lg:left-1/2 lg:-translate-x-1/2`}
`
