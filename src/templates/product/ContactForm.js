import React, { useState, useRef } from "react"
import tw, { styled } from "twin.macro"
import { MdClose } from "react-icons/md"

import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"
import Form from "../../components/Form"

export default function ContactForm({ show, handleVisibility, productName }) {
  const overlayWrapper = useRef()

  if (show) {
    disableBodyScroll(overlayWrapper.current)
  } else {
    clearAllBodyScrollLocks()
  }

  return (
    <>
      <StyledWrapper ref={overlayWrapper}>
        <StyledOverlay show={show} onClick={() => handleVisibility(false)} />
        <StyledFormWrapper show={show}>
          <MdClose
            tw="text-3xl text-white absolute top-4  right-4"
            onClick={() => handleVisibility(false)}
          ></MdClose>
          <Form heading="Zapytaj o produkt" product={productName} />
        </StyledFormWrapper>
      </StyledWrapper>
    </>
  )
}

const StyledWrapper = styled.div`
  ${tw`z-50`}
`

const StyledOverlay = styled.div`
  ${tw`fixed inset-0 invisible transition-all duration-200 bg-black opacity-0 `}
  ${({ show }) => show && tw`visible opacity-40`}
  backdrop-filter: blugatsbyr(10px);
`

const StyledFormWrapper = styled.div`
  ${tw`fixed inset-y-0 lg:-right-1 flex flex-col justify-between w-full lg:w-1/3 max-w-4xl  p-4 pt-14 pb-10 lg:p-10 transition duration-200 transform translate-x-full bg-accent-gray 2xl:w-1/4 overflow-auto z-50`}

  ${({ show }) => show && tw`translate-x-0 `}
`
