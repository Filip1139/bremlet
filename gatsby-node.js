const path = require("path")

async function turnPostsIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      posts: allWpPost {
        totalCount
        nodes {
          title
          slug
          uri
          id
        }
      }
      perPage: wp {
        readingSettings {
          postsPerPage
        }
      }

      categories: allWpCategory {
        nodes {
          link
          slug
        }
      }
    }
  `)
  data.posts.nodes.forEach((post) => {
    actions.createPage({
      path: post.uri,
      component: path.resolve("./src/templates/SinglePost.js"),
      context: {
        slug: post.slug,
      },
    })
  })
  // Create pagination pages
  const pageSize = data.perPage.readingSettings.postsPerPage
  const postsNumber = data.posts.totalCount
  const pageCount = Math.ceil(postsNumber / pageSize)

  //   // Loop n times
  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/blog/${i + 1}`,
      component: path.resolve("./src/pages/blog.js"),

      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    })
  })

  data.categories.nodes.forEach((category) => {
    actions.createPage({
      path: `/kategoria/${category.slug}`,
      component: path.resolve("./src/templates/Archives.js"),
      context: {
        category,
      },
    })
  })
}

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
      context: {
        slug: product.slug,
      },
    })
  })
}

async function turnSubpagesTemplatesIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query subpageQuery {
      subpages: allWpPage(
        filter: { template: { templateName: { eq: "Subpages" } } }
      ) {
        nodes {
          slug
          title
          SubpageACF {
            textwysywig
            pagetype
            count
            blokrepeater {
              title
              desc
            }
          }
        }
      }
    }
  `)

  data.subpages.nodes.forEach((subpage) => {
    const subpageTemplate = path.resolve("./src/templates/Subpages.js")

    actions.createPage({
      path: `/${subpage.slug}`,
      component: subpageTemplate,
      context: {
        title: subpage.title,
        slug: subpage.slug,
        acfFields: subpage.SubpageACF,
      },
    })
  })
}

exports.createPages = async (params) => {
  // 1. Products
  await Promise.all([
    turnProductsIntoPages(params),
    turnPostsIntoPages(params),
    turnSubpagesTemplatesIntoPages(params),
    // turnPostCategoriesIntoPages(params),
  ])
}
