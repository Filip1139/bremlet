import React from "react"
import Image from "gatsby-image"
import tw, { styled } from "twin.macro"
import { device } from "../MediaQuery"

export default function ImagesThumbnails({ images, imagesRefs }) {
  const scrollToImage = (scrollTo) => {
    scrollTo.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <StyledWrapper tw="absolute left-0 ">
      {images.map((img, idx) => (
        <div
          onClick={() => scrollToImage(imagesRefs.current[idx])}
          key={idx + img?.localFile?.childImageSharp?.id}
          css={[
            tw`mb-4 overflow-hidden rounded-full cursor-pointer w-14 h-14`,
            idx === 0 && tw`bg-white`,
          ]}
        >
          <Image fluid={img?.localFile?.childImageSharp?.fluid} />
        </div>
      ))}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin-top: 50vh;
  transform: translate(-57vw, -50%);
  @media ${device.large} {
    transform: translate(-55vw, -50%);
  }
`
