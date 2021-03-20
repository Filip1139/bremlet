import React, { useState, useRef } from "react"
import tw, { styled } from "twin.macro"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"

import ImagesThumbnails from "../../components/ImagesThumbnails"
import Tabs from "../../components/Tabs"
import Badge from "../../components/Badge"
import ContactForm from "./ContactForm"

export default function SingleProductInfo({
  productInfo,
  imagesRefs,
  date,
  title,
}) {
  // get simple variables
  const {
    productDetails: { productDesc, productDetails, productExtra },
  } = productInfo

  const tabsDetails = [
    {
      tabId: "desc",
      tabName: "Opis",
      desc: productDesc,
    },
    {
      tabId: "details",
      tabName: "Szczegóły",
      desc: productDetails,
    },
    {
      tabId: "shipping",
      tabName: "Przesyłka",
      desc: productExtra,
    },
  ]

  const [visibility, setVisibility] = useState(false)
  const overlayWrapper = useRef()

  const showSidebar = () => {
    setVisibility(true)
    disableBodyScroll(overlayWrapper)
  }

  return (
    <>
      <StyledContentWrapper>
        <div tw="sticky top-0">
          <ImagesThumbnails
            images={productInfo.gallery}
            imagesRefs={imagesRefs}
          />
          <div className="product-info-wrapper">
            <div tw="relative">
              {date <= 10 && (
                <Badge
                  title="new"
                  tw="left-0 -top-8 right-auto bg-accent-gray bg-opacity-20 text-white"
                />
              )}
              {visibility}
              <h1>{title}</h1>
              <SeparatorLine />

              <Tabs items={tabsDetails} />

              <StyledButton onClick={() => showSidebar()}>
                Zapytaj o produkt
              </StyledButton>
            </div>
          </div>
        </div>
      </StyledContentWrapper>

      <ContactForm
        show={visibility}
        handleVisibility={(visibility) => setVisibility(visibility)}
        productName={title}
        formName="Zapytanie o produkt"
      />
    </>
  )
}

const StyledContentWrapper = styled.div`
  ${tw`col-span-5 px-4 md:px-10 xl:pl-10 xl:pr-20 2xl:pr-32`}
  .product-info-wrapper {
    ${tw`block pb-10 lg:pb-20 lg:pt-60 2xl:pt-72`}
  }
  h1 {
    ${tw`text-3xl md:text-5xl xl:text-3xl font-messina text-accent-gray 2xl:text-5xl`}
  }
`
const SeparatorLine = styled.div`
  ${tw`w-full mt-4 mb-8 bg-gray-300 h-base`}
`

const StyledButton = styled.div`
  ${tw`flex items-center justify-center w-full py-6 mt-10 text-white transition duration-200 bg-transparent border cursor-pointer lg:py-6 md:text-2xl lg:text-sm bg-accent-gray border-accent-gray hover:border-accent-gray hover:bg-white hover:text-accent-gray`}

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
