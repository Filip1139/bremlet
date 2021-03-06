import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import tw, { styled } from "twin.macro"
import ProductCard from "../ProductCard"
import { device } from "../MediaQuery"

const sliderParams = {
  spaceBetween: 16,
  slidesPerView: 1.1,
}
export default function ProductsSlider({ fields: slides }) {
  return (
    <StyledSwiperWrapper>
      <StyledSwiper {...sliderParams}>
        {slides?.map((slide) => (
          <SwiperSlide>
            <div>
              <ProductCard key={slide.id} productInfo={slide} showBadge />
            </div>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledSwiperWrapper>
  )
}

const StyledSwiperWrapper = styled.div`
  ${tw`relative px-4 mx-auto md:px-10 lg:px-0 `}

  @media ${device.laptop} {
    width: 90vw;
  }
`

const StyledSwiper = styled(Swiper)`
  ${tw`overflow-visible`}
`
