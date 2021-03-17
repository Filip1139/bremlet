require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Bremlet`,
    description: `Producent wyrobów z drewna`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,

    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: `webp`, // valid formats: png,jpg,webp
        stripMetadata: true,
        defaultQuality: 95,
        failOnError: true,
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token:
          "IGQVJXMkJTeHd2dzYtMldublBZAOWdtZA0o1Y2lUb1pXejlLSVdaazEzR3M0QjVnWjE3aGJFWkd0ek80eUdUVXNsY3lacTF0NTU1c3NjYTljZATBrcFZA3THpWVEJkZATNIY3lfaktQbi00aEJXTkV0LWVKSgZDZD",
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        normalizers: (normalizers) => [
          dropUnusedMediaNormalizer,
          ...normalizers,
        ],
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: process.env.WP_URL,
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
          hardCacheData: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
  ],
}
