import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Img from "gatsby-image"
import "swiper/swiper-bundle.css"

import { SRLWrapper } from "simple-react-lightbox"
import tw, { styled } from "twin.macro"
import { device } from "./MediaQuery"

const options = {
  settings: {
    transitionSpeed: 300,
  },
}
const sliderParams = {
  spaceBetween: 16,
  slidesPerView: 1.1,
  observer: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
  },
}
export default function ImagesSlider({ slides, heading }) {
  return (
    <section tw="overflow-hidden bg-accent-light-gray py-16 lg:py-32">
      <StyledSwiperWrapper>
        {heading && <h4 tw="text-3xl font-messinaBook mb-10">{heading}</h4>}
        <StyledSwiper {...sliderParams}>
          {slides.map((slide) => {
            return (
              <SwiperSlide>
                <StyledImageWrapper>
                  <a
                    href="https://www.instagram.com/bremletwoodwork"
                    target="_blank"
                  >
                    <Img
                      tw="h-full"
                      fluid={slide.node.localImage.childImageSharp.fluid}
                    ></Img>
                  </a>
                </StyledImageWrapper>
              </SwiperSlide>
            )
          })}
        </StyledSwiper>
      </StyledSwiperWrapper>
    </section>
  )
}

const StyledSwiperWrapper = styled.div`
  ${tw`relative mx-auto `}
  width: 90vw;
`

const StyledSwiper = styled(Swiper)`
  ${tw`overflow-visible`}
`
const StyledImageWrapper = styled.div`
  height: 80vw;
  width: 80vw;
  @media ${device.laptop} {
    height: 28.4722vw;
    width: 28.4722vw;
  }
`
