import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

export default function Pagination({
  pageSize,
  totalPages,
  currentPage = 1,
  skip,
  base,
}) {
  const allPages = Math.ceil(totalPages / pageSize)
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1

  const hasPrevPage = prevPage >= 1
  const hasNextPage = nextPage <= allPages

  return (
    <div tw="flex space-x-7">
      {hasPrevPage && (
        <Link
          tw="flex items-center border-b-2 border-transparent hover:border-accent-gray transition "
          to={`${base}/${prevPage}`}
        >
          <BsArrowLeft tw="mr-2" />
          Poprzednia strona
        </Link>
      )}
      {hasNextPage && (
        <Link
          tw="flex items-center border-b-2 border-transparent hover:border-accent-gray transition "
          to={`${base}/${nextPage}`}
        >
          Nastepna strona <BsArrowRight tw="ml-2" />
        </Link>
      )}
    </div>
  )
}
