import React, { useRef, useEffect } from "react"
import tw from "twin.macro"
import Image from "gatsby-image"

export default function SingleProductImages({ images, getRefs }) {
  const itemsRef = useRef([])

  useEffect(() => {
    getRefs(itemsRef)
  }, [])

  return (
    <>
      <div tw="flex flex-col lg:col-span-7 ">
        {images.map((img, idx) => (
          <div
            key={img?.localFile?.childImageSharp?.id}
            tw="h-screen"
            ref={(el) => (itemsRef.current[idx] = el)}
          >
            <Image
              tw="h-full w-full"
              fluid={img?.localFile?.childImageSharp?.fluid}
            />
          </div>
        ))}
      </div>
    </>
  )
}
