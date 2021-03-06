const path = require("path")

async function turnProductsIntoPages({ graphql, actions }) {
  const productTemplate = path.resolve("./src/templates/Product.js")

  const { data } = await graphql(`
    query AllProducts {
      allWpProdukt {
        nodes {
          slug
          title
        }
      }
    }
  `)
  data.allWpProdukt.nodes.forEach((product) => {
    actions.createPage({
      path: `produkt/${product.slug}`,
      component: productTemplate,
    })
  })
}

exports.createPages = async (params) => {
  // 1. Products
  await turnProductsIntoPages(params)
}
exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig()
  config.node = {
    fs: "empty",
  }
}
