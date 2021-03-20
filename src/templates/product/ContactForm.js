import React, { useState, useRef } from "react"
import tw, { styled } from "twin.macro"

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
  ${tw`fixed inset-y-0 -right-1 flex flex-col justify-between w-1/3 max-w-4xl p-10 transition duration-200 transform translate-x-full bg-accent-gray 2xl:w-1/4 overflow-auto`}

  ${({ show }) => show && tw`translate-x-0 `}
`
