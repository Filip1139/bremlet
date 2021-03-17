import React from "react"

import SwiperCore, { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Img from "gatsby-image"

import tw, { styled } from "twin.macro"

SwiperCore.use(Pagination)

const sliderParams = {
  spaceBetween: 16,
  slidesPerView: 1,
  pagination: {
    clickable: true,
  },
}

export default function SingleImageSlider({ images }) {
  return (
    <section tw="overflow-hidden pb-10 ">
      <StyledSwiperWrapper>
        <StyledSwiper {...sliderParams}>
          {images?.map((slide) => (
            <SwiperSlide>
              <div>
                <a href={slide.localFile.childImageSharp.fluid.src}>
                  <Img
                    tw="h-full"
                    fluid={slide.localFile.childImageSharp.fluid}
                  ></Img>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </StyledSwiperWrapper>
    </section>
  )
}

const StyledSwiperWrapper = styled.div`
  ${tw`relative mx-auto `}
`

const StyledSwiper = styled(Swiper)`
  ${tw`overflow-visible`}
`
