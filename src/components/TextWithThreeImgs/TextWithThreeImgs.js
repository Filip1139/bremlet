import tw, { styled, css } from "twin.macro"

import { device } from "../MediaQuery"
import bgPattern from "../../images/bg-pattern.jpg"

export const StyledSection = styled.section`
  background: url(${bgPattern});
  ${tw`relative z-10 pt-20 overflow-hidden xl:overflow-visible lg:pb-32`}

  ${({ bigPadding }) =>
    bigPadding ? tw`md:pt-72 lg:pt-80` : tw`pt-10 lg:pt-20 `}
`

export const absolute = styled.div`
  ${tw`xl:absolute`};
`

export const StyledBigText = styled.div`
  font-size: 14.4928vw;
  z-index: 1;
  ${tw`relative mt-10 leading-none tracking-wide text-center text-gray-800 uppercase pb-52 md:pb-96 xl:pb-0 font-messinaBook`}
  ${({ componentHasDesc }) => (componentHasDesc ? tw`pb-0` : tw`pb-52`)}
  @media ${device.laptop} {
    ${tw`max-w-screen-xl mx-auto `}
    font-size: 11vw;
  }
`

export const StyledFirstImage = styled.div`
  ${tw`absolute top-0 z-0`};
  width: 30vw;
  right: 0;
  max-width: 300px;
  @media ${device.laptop} {
    right: 8.33333vw;
    width: 16.7361vw;
    height: 24.3056vw;
  }
`

export const StyledSecondImage = styled(absolute)`
  ${tw`left-0 z-10 w-1/3 top-1/2 `}
  @media ${device.tablet} {
    ${tw`z-0 top-1/3`}
  }
  @media ${device.wide} {
    ${({ variant }) =>
      variant === 1
        ? css`
            left: -8%;
            height: 30vw;
            top: 25%;
          `
        : variant === 2
        ? css`
            bottom: auto;
            top: 17.3611vw;
            left: 4.44444vw;
            width: 29.1667vw;
            height: 38.1944vw;
          `
        : css`
            width: 29.0278vw;
            left: 4.30556vw;
            top: 31.9444vw;
            z-index: 13;
          `}
  }
`

export const StyledThirdImage = styled(absolute)`
  ${tw`right-0 bottom-10 `}
  width: 30vw;
  @media ${device.tablet} {
    ${tw`bottom-20`}
  }
  @media ${device.laptop} {
    ${tw`bottom-0 right-0 `} /* ${({ componentHasDesc }) =>
      componentHasDesc && tw`translate-x-1/2`} */
 

    ${({ variant }) =>
      variant === 1
        ? css`
            bottom: 0px;
            right: 0px;
            width: 25vw;
            height: 21.5278vw;
          `
        : variant === 2
        ? css`
            bottom: -3.47222vw;
    right: 2vw;
    width: 37.3611vw;
    height: 26.3889vw;
}
          `
        : css`
            width: 37.5vw;
            right: 8.33333vw;
            bottom: -3.81944vw;
            z-index: 2;
          `}
  }
  @media ${device.large} {
    ${tw`translate-x-0`}
  }
`

export const StyledDesc = styled.p`
  ${tw`relative z-10 max-w-screen-sm mx-auto mt-10 text-gray-500 2xl:max-w-screen-md 2xl:text-xl`}
`
