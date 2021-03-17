import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"
import BlogCard from "../components/BlogCard"

import bgPattern from "../images/bg-pattern.jpg"
import BigBlogCard from "../components/BigBlogCard"
import Pagination from "../components/Pagination"

export default function Archives({ data, pageContext }) {
  console.log(data)
  const { posts } = data

  return (
    <StyledSection>
      <div tw="text-center py-20">
        <StyledPageTitle tw="font-messinaBook">Blog</StyledPageTitle>
      </div>
      <div tw="container mx-auto pb-20 grid grid-cols-12 gap-x-8 gap-y-16">
        {posts.nodes.map((post, idx) => {
          if (
            idx == 0 &&
            (pageContext.currentPage == 1 || !pageContext.currentPage)
          ) {
            return (
              <BigBlogCard
                title={post?.title}
                excerpt={post?.excerpt}
                img={
                  post?.featuredImage?.node?.localFile?.childImageSharp?.fluid
                }
                uri={post?.uri}
                date={post?.date}
                key={post?.id}
              />
            )
          } else {
            return (
              <BlogCard
                title={post?.title}
                excerpt={post?.excerpt}
                img={
                  post?.featuredImage?.node?.localFile?.childImageSharp?.fluid
                }
                uri={post?.uri}
                date={post?.date}
                key={post?.id}
              />
            )
          }
        })}
      </div>
      <div tw="flex justify-center mt-10">
        <Pagination
          pageSize={
            pageContext.pageSize || data.perPage.readingSettings.postsPerPage
          }
          totalPages={data.posts.totalCount}
          currentPage={pageContext.currentPage || 1}
          skip={pageContext.skip}
          base="/blog"
        />
      </div>
    </StyledSection>
  )
}

export const StyledSection = styled.section`
  background: url(${bgPattern});
`
const StyledPageTitle = styled.h1`
  padding: 0px;
  width: 70%;
  margin: 0 auto;
  font-size: 11.875vw;
`

export const query = graphql`
  query archives($skip: Int = 0, $pageSize: Int = 10, $category: String!) {
    posts: allWpPost(
      limit: $pageSize
      skip: $skip
      sort: { fields: date, order: DESC }
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: $category } } } }
      }
    ) {
      totalCount
      nodes {
        title
        slug
        uri
        id
        date(formatString: "D.M.Y")
        excerpt
        featuredImage {
          node {
            ...acfImageFragment
          }
        }
      }
    }

    perPage: wp {
      readingSettings {
        postsPerPage
      }
    }
  }
`
