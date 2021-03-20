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
                    <a tw="hover:underline" href="mailto:test@wp.pl">
                      bremlet@wp.pl
                    </a>
                  </li>
                  <li>
                    <a tw="hover:underline" href="tel:500500500">
                      +48 500 500 500
                    </a>
                  </li>
                  <li>
                    <a tw="hover:underline" href="tel:500500500">
                      +48 500 500 500
                    </a>
                  </li>
                </ul>
              </div>
            </Form>
          </div>
        </StyledFormWrapper>
        <div tw="w-3/5 h-auto">
          <iframe
            tw="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76608.7805460361!2d23.086026561082594!3d53.12770770607341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc048f41971d%3A0x72317dcc8bf07b2c!2sBia%C5%82ystok!5e0!3m2!1spl!2spl!4v1616185623011!5m2!1spl!2spl"
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
