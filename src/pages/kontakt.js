import React, { useEffect } from "react"
import tw, { styled } from "twin.macro"
import Form from "../components/Form"
export default function Kontakt() {
  useEffect(() => {
    document.body.classList.add("header-bg-dark")

    return () => {
      document.body.classList.remove("header-bg-dark")
    }
  })

  return (
    <>
      <section tw="flex">
        <StyledFormWrapper>
          <div tw="2xl:w-2/3 pb-10">
            <Form heading="Napisz do nas" formName="Kontakt">
              <div tw="my-10 block">
                <h6 tw="my-4 text-xl">Informacje kontaktowe</h6>
                <ul tw="text-gray-400">
                  <li>
                    <a
                      tw="hover:underline"
                      href="mailto:bremlet@bremletwoodwork.com"
                    >
                      bremlet@bremletwoodwork.com
                    </a>
                  </li>
                  <li>
                    <a tw="hover:underline" href="tel:+48665478773">
                      +48 665 478 773
                    </a>
                  </li>
                  <li tw="mt-4">Kołodno 41 16-040, Podlaskie, Polska</li>
                </ul>
              </div>
            </Form>
          </div>
        </StyledFormWrapper>
        <div tw="w-3/5 h-auto">
          <iframe
            tw="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91023.34561445602!2d23.37830979514388!3d53.16560645133753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfff69825c7235%3A0x7008cd7b71bd4799!2sKo%C5%82odno%2041%2C%2016-040%20Ko%C5%82odno!5e0!3m2!1spl!2spl!4v1618419332075!5m2!1spl!2spl"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  )
}

const StyledFormWrapper = styled.div`
  ${tw`px-10 pt-24 w-2/5 bg-accent-gray text-accent-light-gray`}
`
