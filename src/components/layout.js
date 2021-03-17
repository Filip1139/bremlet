import React from "react"
import { GlobalStyles } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "../components/seo"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      wpMenu(locations: { eq: MENU_1 }) {
        menuItems {
          nodes {
            url
            label
          }
        }
      }

      gallery: allWp {
        nodes {
          opcjeMotywu {
            PageOptions {
              gallery {
                ...acfImageFragment
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <GlobalStyles />
      <Header menu={data.wpMenu} />
      {children}
      <Footer gallery={data.gallery}>hlelo</Footer>
    </>
  )
}
