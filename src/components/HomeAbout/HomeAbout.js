import tw, { styled } from "twin.macro"

import { device } from "../MediaQuery"
import bgPattern from "../../images/bg-pattern.jpg"

export const StyledSection = styled.section`
  background: url(${bgPattern});
  ${tw`relative z-10 pt-20 lg:pb-32 md:pt-72 lg:pt-80`}
`

export const absolute = styled.div`
  ${tw`absolute`};
`

export const StyledBigText = styled.div`
  font-size: 14.4928vw;
  z-index: 1;
  ${tw`relative mt-10 leading-none tracking-wide text-center text-gray-800 uppercase pb-52 md:pb-96 xl:pb-0 font-messinaBook`}
  @media ${device.laptop} {
    font-size: 11vw;
  }
`

export const StyledFirstImage = styled(absolute)`
  ${tw`z-0`};
  top: -15vw;
  width: 30vw;
  right: 0;
  max-width: 300px;
  @media ${device.laptop} {
    right: 5vw;
  }
  @media ${device.large} {
    width: 300px;
    top: -10vw;
  }
`

export const StyledSecondImage = styled(absolute)`
  ${tw`left-0 z-10 w-1/3 top-1/2 `}
  @media ${device.tablet} {
    ${tw`z-0 top-1/3`}
  }
  @media ${device.wide} {
    left: -8%;
    ${tw`z-10 top-1/4`}
  }
`

export const StyledThirdImage = styled(absolute)`
  ${tw`absolute right-0 bottom-10 `}
  width: 40%;
  @media ${device.tablet} {
    ${tw`bottom-20`}
  }
  @media ${device.laptop} {
    ${tw`bottom-0 transform translate-y-1/2 `}
  }
`
