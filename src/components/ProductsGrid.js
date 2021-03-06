import React from "react"
import ProductCard from "./ProductCard"
import tw from "twin.macro"
export default function ProductsGrid({ fields, gridItemsWidth }) {
  // const items = fields.nodes ? fields.nodes : fields
  return (
    <div tw="grid gap-4 grid-cols-12 ">
      {fields.map((product, idx) => (
        <ProductCard
          key={product.id}
          productInfo={product}
          cols={gridItemsWidth[idx]}
          showBadge
        />
      ))}
    </div>
  )
}
