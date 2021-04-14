import tw, { styled, css } from "twin.macro"

import { device } from "../MediaQuery"
import bgPattern from "../../images/bg-pattern.jpg"

export const StyledSection = styled.section`
  background: url(${bgPattern});
  ${tw`relative z-10 pt-20  xl:overflow-visible lg:pb-32`}

  ${({ bigPadding }) =>
    bigPadding ? tw`md:pt-72 lg:pt-80` : tw`pt-10 lg:pt-20 `}

    .parallax-inner {
    ${tw`h-full`}
  }
`

export const absolute = styled.div`
  ${tw`absolute`};
`

export const StyledBigText = styled.div`
  font-size: 14.4928vw;
  z-index: 1;
  ${tw`relative mt-10 lg:mt-0 leading-none tracking-wide text-center text-gray-800 uppercase pb-52 md:pb-96 xl:pb-0 `}
  ${({ componentHasDesc }) => (componentHasDesc ? tw`pb-0` : tw`pb-52`)}
  @media ${device.laptop} {
    ${tw`max-w-screen-xl mx-auto `}
    font-size: 10vw;
  }
  ${({ variant }) => variant === 1 && tw`pt-44  xl:pt-0`}
  ${({ variant }) => variant === 2 && tw`py-32 md:pb-96 xl:pb-0`}
`

export const StyledFirstImage = styled.div`
  ${tw`top-5 z-0`};
  width: 35vw;
  right: 0;
  top: 7vw;
  max-width: 300px;

  ${({ variant }) =>
    variant === 1
      ? css`
          position: absolute;
          top: -1.41546vw;
          width: 43.4783vw;
          height: 63.285vw;
          right: 7.24638vw;
        `
      : variant === 2
      ? css`
          position: absolute;
          top: -15%;
          height: 60vw;
        `
      : css`
          position: absolute;
          width: 33.0918vw;
          right: 0px;
          top: 19.3237vw;
        `}

  @media ${device.laptop} {
    position: absolute;
    top: 0;
    right: 8.33333vw;
    width: 16.7361vw;
    height: 24.3056vw;
    ${({ variant }) =>
      variant === 1
        ? css``
        : variant === 2
        ? css``
        : css`
            width: 16.6667vw;
            right: 8.33333vw;
            top: 4.375vw;
          `}
  }
`

export const StyledSecondImage = styled.div`
  ${tw`left-0 z-10 w-1/3 -bottom-8 `}
  ${({ variant }) =>
    variant === 1
      ? css`
          position: absolute;
          top: 14.4928vw;
          left: 0px;
          height: 48.7923vw;
          width: 35.0242vw;
        `
      : variant === 2
      ? css`
      position: absolute;
      top: auto;
      bottom: 0px;
      left: 0px;
      height: 43.9614vw;
      width: 33.8164vw;
      z-index: 10;
  }
        `
      : css`
          position: absolute;
          width: 35.7488vw;
          left: 0px;
          bottom: 10vw;
        `}



  @media ${device.tablet} {
    ${tw`z-0 top-1/3`}
  }
  @media ${device.wide} {
    ${tw`absolute`}
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
            height: 40vw;
          `}
  }
`

export const StyledThirdImage = styled.div`
  ${tw`right-0 `}
  width: 50vw;

  ${({ variant }) =>
    variant === 1
      ? css`
          width: 89.372vw;
          height: 67.6329vw;
          margin-left: auto;
          margin-top: 50px;
        `
      : variant === 2
      ? css`
          width: 45.8937vw;
          height: 32.6087vw;
          margin-left: auto;
        `
      : css`
          position: absolute;
          width: 43.4783vw;
          right: 0px;
          bottom: 8.33333vw;
        `}

  @media ${device.tablet} {
    ${tw`bottom-20`}
  }
  @media ${device.laptop} {
    ${tw`bottom-0 right-0 absolute`}
    ${({ componentHasDesc }) => componentHasDesc && tw`translate-x-1/2`}
 

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
        top: auto;
            bottom: -3.47222vw;
    right: 2vw;
    width: 37.3611vw;
    height: 26.3889vw;
}
          `
        : css`
            width: 32.5vw;
            right: 8.33333vw;
            bottom: -8vw;
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
