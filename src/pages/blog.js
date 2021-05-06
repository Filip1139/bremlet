import React, { useEffect } from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"
import BlogCard from "../components/BlogCard"

import bgPattern from "../images/bg-pattern.jpg"
import BigBlogCard from "../components/BigBlogCard"
import Pagination from "../components/Pagination"

export default function Blog({ data, pageContext }) {
  const { posts } = data

  useEffect(() => {
    document.body.classList.add("header-bg-dark")

    return () => {
      document.body.classList.remove("header-bg-dark")
    }
  })

  return (
    <StyledSection>
      <div tw="text-center pt-28 pb-20 lg:py-20">
        <StyledPageTitle tw="font-messinaBook">Blog</StyledPageTitle>
      </div>
      <div tw="container mx-auto pb-20 grid grid-cols-12 lg:gap-x-8 gap-y-16">
        {posts.nodes.map((post, idx) => {
          if (
            idx === 0 &&
            (pageContext.currentPage === 1 || !pageContext.currentPage)
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
  query blog($skip: Int = 0, $pageSize: Int = 10) {
    posts: allWpPost(
      limit: $pageSize
      skip: $skip
      sort: { fields: date, order: DESC }
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
