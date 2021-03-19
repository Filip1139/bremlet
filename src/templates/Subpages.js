import React from "react"
import sanitizeHtml from "sanitize-html"
import tw, { styled } from "twin.macro"
import bgPattern from "../images/bg-pattern.jpg"
import TextRow from "./subpages/TextRow"

import { v4 as uuidv4 } from "uuid"
import { device } from "../components/MediaQuery"

export default function Subpages({ pageContext }) {
  const { title, acfFields } = pageContext
  console.log(
    "🚀 ~ file: Subpages.js ~ line 7 ~ Subpages ~ pageContext",
    pageContext
  )
  return (
    <StyledSection>
      <div
        tw="mx-auto px-4 md:px-10 max-w-6xl
    "
      >
        <StyledTextHero>{title}</StyledTextHero>
        {acfFields.pagetype == "textOnly" && (
          <div
            tw="prose "
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(acfFields.textwysywig),
            }}
          ></div>
        )}

        {acfFields.pagetype == "reapeatText" &&
          acfFields?.blokrepeater?.map((block, idx) => (
            <TextRow
              key={uuidv4()}
              num={idx}
              countSections={acfFields?.count}
              title={block.title}
              desc={block.desc}
            />
          ))}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  ${tw`bg-accent-light-gray`}
`
const StyledTextHero = styled.h1`
  font-size: 14.0097vw;
  width: 100%;
  padding-top: 26.57vw;

  margin: 0 auto 5vw;
  text-align: center;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 10vw;
    line-height: 1.1;
    width: 90%;
    padding-top: 9vw;
  }
`
