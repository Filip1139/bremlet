import React, { useEffect, useRef } from "react"
import tw, { styled } from "twin.macro"
import Button from "../../components/Button"
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"

import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function ContactForm({ show, handleVisibility }) {
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
          <div>
            <h6 tw="font-messina text-white">Kontakt</h6>
            <h5 tw="text-3xl mb-10 md:text-5xl xl:text-3xl font-messina text-white">
              Zapytaj o produkt
            </h5>
            <form>
              <StyledInput type="text" name="name" placeholder="Imię" />
              <StyledInput
                type="email"
                name="email"
                placeholder="Adres email"
              />
              <StyledInput
                type="phone"
                name="phone"
                placeholder="Numer telefonu"
              />
              <input type="hidden" name="product" />
              <StyledTextarea
                name="question"
                id="question"
                cols="30"
                rows="5"
                placeholder="Treść wiadomości"
              ></StyledTextarea>

              <Button
                variant="white-bg"
                tw="mt-4 cursor-pointer"
                title="Wyślij zapytanie"
              />
            </form>
          </div>
          <div tw="text-white">
            <p>Nasze social media:</p>
            <div tw="flex mt-2  text-lg">
              <a href="https://twitter.com" target="_blank" tw="mr-2">
                <FaFacebookSquare />
              </a>

              <a href="https://www.facebook.com" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
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
  ${tw`fixed inset-y-0 right-0 flex flex-col justify-between w-1/3 max-w-4xl p-10 transition duration-200 transform translate-x-full bg-accent-gray 2xl:w-1/4`}

  ${({ show }) => show && tw`translate-x-0 `}
`

const StyledInput = styled.input`
  ${tw`w-full p-4 mb-4 bg-transparent border border-gray-600 border-opacity-80 text-accent-light-gray`}
`
const StyledTextarea = styled.textarea`
  ${tw`w-full p-4 mb-4 bg-transparent border border-gray-600 border-opacity-80 text-accent-light-gray`}
`
