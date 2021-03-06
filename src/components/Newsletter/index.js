import React, { useState } from "react"
import tw, { styled } from "twin.macro"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section tw="py-20">
      <div tw="container mx-auto px-4 md:px-10 lg:px-0">
        <h4 tw="text-gray-400 text-xl md:text-3xl leading-tight lg:text-xl">
          Join our monthly newsletter <br />
          to stay inspired.
        </h4>
        <form>
          <StyledInputwrapper>
            <StyledInput
              type="text"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledLabel htmlFor="email">Email</StyledLabel>

            <StyledButton>Wyślij</StyledButton>
          </StyledInputwrapper>
        </form>
      </div>
    </section>
  )
}

const StyledInputwrapper = styled.div`
  ${tw`relative flex flex-col mt-20 lg:flex-row lg:items-center lg:justify-between`}

  input:focus + label,
  input:valid + label {
    ${tw`scale-75 -translate-y-10`}
  }
`
const StyledLabel = styled.label`
  ${tw`absolute left-0 block h-0 px-2 text-2xl transition-transform duration-300 origin-left transform md:text-3xl top-4 font-messina `}
`

const StyledInput = styled.input`
  ${tw`w-full px-2 py-4 text-xl bg-transparent border-none outline-none lg:text-2xl lg:w-1/2`}
`
const StyledButton = styled.button`
  ${tw`flex items-center justify-center px-10 py-6 mt-10 text-sm text-gray-700 transition duration-200 bg-white border md:inline-block lg:mt-0 border-accent-gray lg:border-white hover:border-accent-gray hover:bg-accent-gray hover:text-white`}
`
