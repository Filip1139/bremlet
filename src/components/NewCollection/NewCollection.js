import tw, { styled } from "twin.macro"
import { device } from "../MediaQuery"

const StyledImageWrapperLogic = styled.div(({ direction }) => [
  direction === "row-reverse"
    ? tw`left-0 lg:pr-28 2xl:pr-40`
    : tw`right-0 lg:pl-28 2xl:pl-40`,
])

export const StyledImageWrapper = styled(StyledImageWrapperLogic)`
  height: 400px;
  ${tw`lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-3/4 lg:h-auto `}
  @media ${device.tablet} {
    height: 600px;
  }
  @media ${device.laptop} {
    height: 100%;
  }
`

export const StyledTextWrapper = styled.div(({ direction }) => [
  tw`relative z-10 pb-20 lg:w-1/4`,
  ,
  direction === "row-reverse" && tw`ml-auto`,
])
