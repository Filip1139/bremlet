import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import { useForm } from "react-hook-form"

import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Form({ heading, product, children, formName }) {
  const { register, handleSubmit, watch, errors } = useForm()
  const [isCorrect, setIsCorrect] = useState(false)

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const onSubmit = (data, e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": formName,
        ...data,
      }),
    })
      .then(() => {
        e.target.reset()
        setIsCorrect(true)
      })
      .catch((error) => {
        setIsCorrect(false)
      })
  }
  return (
    <>
      <div tw="mb-4">
        <h6 tw="font-messina text-white">Kontakt</h6>
        <h5 tw="text-3xl mb-10 md:text-5xl xl:text-3xl font-messina text-white">
          {heading}
        </h5>
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          data-netlify="true"
          name={formName}
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <StyledLabel>
            <StyledInput
              type="text"
              name="fullname"
              placeholder="Imię"
              ref={register({
                required: "Required",
                minLength: 4,
              })}
            />
            {errors.fullname && (
              <StyledErrorMessage>Podaj minimum 4 znaki</StyledErrorMessage>
            )}
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="email"
              name="email"
              placeholder="Adres email"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
              h
            />
            {errors.email && (
              <StyledErrorMessage>
                Nieprawidłowy adres e-mail
              </StyledErrorMessage>
            )}
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="number"
              name="Numer-telefonu"
              placeholder="+48 123 456 789"
              ref={register({ minLength: 6, maxLength: 12 })}
            />
            {errors["Numer-telefonu"] && (
              <StyledErrorMessage>Nieprawidłowy numer</StyledErrorMessage>
            )}
          </StyledLabel>
          <input type="hidden" name="product" />
          {product && (
            <input
              type="hidden"
              name="Produkt którego dotyczy pytanie"
              ref={register}
              value={product}
            />
          )}

          <StyledTextarea
            name="question"
            id="Pytanie"
            cols="30"
            rows="5"
            placeholder="Treść wiadomości"
            ref={register}
          ></StyledTextarea>
          <StyledSubmitButton>Wyślij zapytanie</StyledSubmitButton>
          {isCorrect && (
            <span tw="text-sm mt-2 block text-green-500">
              Wiadomość została wysłana!
            </span>
          )}
        </form>
      </div>
      {children}
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
    </>
  )
}
const StyledInput = styled.input`
  ${tw`w-full p-4 mb-4 bg-transparent border border-gray-600 border-opacity-80 text-accent-light-gray`}
`
const StyledTextarea = styled.textarea`
  ${tw`w-full p-4 mb-4 bg-transparent border border-gray-600 border-opacity-80 text-accent-light-gray`}
`

const StyledSubmitButton = styled.button`
  ${tw`flex items-center justify-center w-full py-6 transition duration-200 bg-transparent border lg:py-6 md:text-2xl lg:text-sm text-gray-700 bg-white border-white hover:border-white hover:bg-accent-gray hover:text-white`}
`

const StyledLabel = styled.label`
  ${tw`relative block`}
`

const StyledErrorMessage = styled.span`
  ${tw`text-red-500 text-sm -mt-3 mb-2 block `}
  &:before {
    display: inline;
    content: "⚠ ";
  }
`
