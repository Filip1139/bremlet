import React from "react"
import { Link } from "gatsby"

export default function Nav({ menu: { menuItems } }) {
  return (
    <nav>
      <ul tw="flex space-x-10">
        {menuItems?.nodes.map((menuItem) => (
          <li key={menuItem.label}>
            <Link to={menuItem.url || "/"}>{menuItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
