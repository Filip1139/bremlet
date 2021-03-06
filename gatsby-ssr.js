// https://www.gatsbyjs.org/docs/ssr-apis/
import Layout from "./src/components/layout"
import SimpleReactLightbox from "simple-react-lightbox"
export function wrapPageElement({ element, props }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <SimpleReactLightbox>
      <Layout {...props}>{element}</Layout>
    </SimpleReactLightbox>
  )
}
