// https://www.gatsbyjs.org/docs/ssr-apis/
import Layout from "./src/components/layout"
import SimpleReactLightbox from "simple-react-lightbox"
import { ParallaxProvider } from "react-scroll-parallax"

export function wrapPageElement({ element, props }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <ParallaxProvider>
      <Layout {...props}>{element}</Layout>
    </ParallaxProvider>
  )
}
