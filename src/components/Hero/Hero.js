import tw, { styled } from "twin.macro"
import { device } from "../MediaQuery"

export const StyledHeroWrapper = styled.section`
  ${tw`flex items-end justify-between h-screen`}

  background: url(${({ bgImg }) => bgImg}) center / cover no-repeat;
`

export const StylecHeroContainer = styled.div`
  margin-bottom: 6vh;
  ${tw`container flex flex-col w-full px-4 mx-auto text-white align-bottom md:px-10 xl:px-0 lg:items-end lg:justify-between lg:flex-row`}
  h1 {
    ${tw`mb-4 text-4xl md:text-6xl lg:text-4xl md:mb-10 lg:mb-0 lg:w-2/4`}
  }
`
