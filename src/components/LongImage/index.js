import React from "react"
import Image from "gatsby-image"
import tw from "twin.macro"
import { StyledSection, StyledContainer } from "./LongImage"
import logo from "../../images/logo-white.png"

export default function LongImage({ fields }) {
  return (
    <StyledSection>
      <StyledContainer>
        <div className="long-img__wrapper">
          <Image
            fluid={fields?.bg?.localFile?.childImageSharp?.fluid}
            tw="h-full"
          />
        </div>
        <div className="long-img__text-wrapper">
          <img src={logo} alt="Bremlet logo" />
          <p tw="">{fields.desc}</p>
        </div>
      </StyledContainer>
    </StyledSection>
  )
}
