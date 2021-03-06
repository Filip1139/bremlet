import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

const StyledButtonLogic = styled(Link)(({ variant }) => [
  tw`flex items-center justify-center w-full py-6 transition duration-200 bg-transparent border lg:py-6 md:text-2xl lg:text-sm`,
  variant === "dark" &&
    tw`border-accent-gray text-accent-gray hover:text-white hover:bg-accent-gray `,
  variant === "white" &&
    tw`text-white border-white hover:border-accent-gray hover:bg-accent-gray `,
  variant === "gray" &&
    tw`text-gray-400 border-gray-400 hover:border-accent-gray hover:bg-accent-gray hover:text-white`,
  variant === "white-bg" &&
    tw`text-gray-700 bg-white border-white hover:border-accent-gray hover:bg-accent-gray hover:text-white`,
  variant === "dark-bg" &&
    tw`text-white bg-accent-gray border-accent-gray hover:border-accent-gray hover:bg-white hover:text-accent-gray`,
])

export const StyledButton = styled(StyledButtonLogic)`
  @media (min-width: 768px) {
    padding: 7.00483vw 0;
  }
  @media (min-width: 1024px) {
    ${tw`py-6`}
    width: 16.6667vw;
  }
  @media (min-width: 1500px) {
    width: 13vw;
  }
`
