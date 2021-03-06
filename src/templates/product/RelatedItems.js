import React from "react"
import tw, { styled } from "twin.macro"
import NewProductsGrid from "../../components/NewProductsGrid"

export default function RelatedItems({ items }) {
  return (
    <section tw="bg-accent-light-gray">
      <NewProductsGrid
        products={items}
        title="Mogą Ci się spodobać również..."
      />
    </section>
  )
}
