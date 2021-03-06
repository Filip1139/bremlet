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
