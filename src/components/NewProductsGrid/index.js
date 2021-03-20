import React, { useEffect, useState } from "react"
import tw from "twin.macro"

import { useMediaQuery } from "react-responsive"
import ProductsSlider from "../ProductsSlider"
import ProductsGrid from "../ProductsGrid"
const gridItemsWidth = [3, 3, 6, 3, 6, 3]

export default function NewProductsGrid({
  fields,
  products,
  title = "Galeria produktów",
}) {
  const [isDesktop, setIsDesktop] = useState()
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })

  useEffect(() => {
    isDesktopOrLaptop && setIsDesktop(true)
  })
  const productsItems = fields ? fields : products

  const productsLayout = isDesktop ? (
    <ProductsGrid fields={productsItems} gridItemsWidth={gridItemsWidth} />
  ) : (
    <ProductsSlider fields={productsItems} />
  )

  return (
    <section tw="bg-accent-light-gray overflow-x-hidden">
      <div tw="container p-0 mx-auto py-10 lg:py-20 lg:px-0 ">
        <h4 tw="text-3xl font-messinaBook mb-10 px-4 md:px-10 lg:px-0">
          {title}
        </h4>
        {productsLayout}
      </div>
    </section>
  )
}
