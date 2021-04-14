import React from "react"
import Layout from "./src/components/layout"
import SimpleReactLightbox from "simple-react-lightbox"
import { ParallaxProvider } from "react-scroll-parallax"

//  Import custom styles into the browser.
import "./src/styles/app.css"

export function wrapPageElement({ element, props }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <SimpleReactLightbox>
      <ParallaxProvider>
        <Layout {...props}>{element}</Layout>
      </ParallaxProvider>
    </SimpleReactLightbox>
  )
}
