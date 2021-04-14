import tw, { styled } from "twin.macro"
import Img from "gatsby-image"

import bgPattern from "../../images/bg-pattern.jpg"
import { device } from "../MediaQuery"

export const StyledSection = styled.section`
  background: url(${bgPattern});
`

export const StyledContainer = styled.div`
  ${tw`container grid grid-cols-12 pb-10 mx-auto lg:px-0 md:pb-14 lg:pb-20`}

  h6 {
    line-height: 90%;
    font-size: 10.8696vw;
    ${tw`pt-5 leading-none lg:pt-20 xl:pt-32 md:text-7xl xl:text-8xl text-accent-gray`}
  }
`

export const StyledBiggerImage = styled.div`
  ${tw`lg:absolute!  z-10 left-0`}
  top: 4vw;
  width: 80%;
`

export const StyledSmallerImage = styled(Img)`
  ${tw`lg:absolute! right-0 ml-auto mr-4 z-20`}
  width: 60%;
  margin-top: -10%;
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.wide} {
    margin-top: 0;
    top: 40%;
  }
  @media ${device.large} {
    top: 50%;
    width: 50%;
  }
`
