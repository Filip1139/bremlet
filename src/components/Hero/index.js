import React from "react"
import { useMediaQuery } from "react-responsive"

import { StylecHeroContainer, StyledHeroWrapper } from "./Hero"
import Button from "../Button"
import { ParallaxBanner } from "react-scroll-parallax"

export default function Hero({ fields: { HomeACF } }) {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  })

  const bgImage = HomeACF?.heroBg?.localFile?.childImageSharp?.fluid?.src
  const mobileBgImage =
    HomeACF?.heroBgMobile?.localFile?.childImageSharp?.fluid?.src

  const heroBg = isTabletOrMobileDevice ? mobileBgImage : bgImage

  return (
    <StyledHeroWrapper>
      <ParallaxBanner
        layers={[
          {
            image: heroBg,
            amount: 0.1,
          },
        ]}
        style={{ height: "100%", position: "absolute" }}
      ></ParallaxBanner>
      <StylecHeroContainer>
        <h1>{HomeACF.heroHeading}</h1>

        <Button
          variant="white"
          to={HomeACF.heroCta.url}
          title={HomeACF.heroCta.title}
        />
      </StylecHeroContainer>
    </StyledHeroWrapper>
  )
}
