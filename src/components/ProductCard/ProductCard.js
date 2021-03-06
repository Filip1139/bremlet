import tw, { styled } from "twin.macro"
import { device, maxDevice } from "../MediaQuery"

export const StyledImagesWrapper = styled.div`
  ${tw`relative flex h-full mb-2 transform -translate-x-1/2 md:mb-0`}
  width: 200%;
  ${({ direction }) => direction === "reverse" && tw`flex-row-reverse`};

  @media ${device.laptop} {
    height: 50vw;
  }
  @media ${device.laptop} {
    height: 100%;
    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  }
`

export const StyledCard = styled.article`
  ${tw`relative grid overflow-hidden`}
  grid-column: 1 / -1;
  grid-template-rows: 80vw 20px;
  @media ${device.tablet} {
    grid-template-rows: 70vw 50px;
    grid-column: span 6 / span 6;
  }

  @media ${device.laptop} {
    ${({ cols }) => cols && `grid-column: span ${cols} / span ${cols};`};
    height: 31.5972vw;
    grid-template-rows: 90% 10%;
    &:hover {
      ${StyledImagesWrapper} {
        ${tw`translate-x-0`}
      }
    }
  }
`
