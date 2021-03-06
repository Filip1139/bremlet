import React from "react"
import Nav from "./Nav"
import logo from "../images/logo.png"
import tw from "twin.macro"
import { Link } from "gatsby"

const Header = tw.header` 
  fixed inset-x-0 top-0

  `
export default function Index({ menu }) {
  return (
    <Header>
      <div tw="container text-white flex items-center md:justify-between">
        <Link to="/">
          <img src={logo} tw="py-2" alt="Bremlet woodwork logo" />
        </Link>

        <Nav menu={menu} />
      </div>
    </Header>
  )
}
