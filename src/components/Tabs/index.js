import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import DOMPurify from "dompurify"

export default function Tabs({ items }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div tw="flex mt-4">
        {items.map((item, idx) => (
          <TabLink
            onClick={() => setActiveTab(idx)}
            active={idx === activeTab && true}
            key={`tab-${idx}`}
          >
            {item.tabName}
          </TabLink>
        ))}
      </div>

      <div tw="block mt-4 2xl:mt-8">
        {items.map((item, idx) => (
          <TabContent
            active={idx === activeTab && true}
            key={`tabContent-${idx}`}
          >
            <p
              tw="xl:text-sm 2xl:text-lg"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item.desc),
              }}
            ></p>
          </TabContent>
        ))}
      </div>
    </div>
  )
}

const TabLink = styled.span`
  ${tw`mr-12 text-sm text-gray-400 uppercase transition-colors duration-200 cursor-pointer xl:text-base 2xl:text-xl`}

  ${({ active }) => active && tw`text-accent-gray`}
`
const TabContent = styled.div`
  ${tw`hidden text-sm transition-colors duration-200 text-accent-gray`}
  ${({ active }) => active && tw`block`}
`
