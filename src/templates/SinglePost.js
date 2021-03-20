import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"
import PostHero from "./singlePost/PostHero"
import sanitizeHtml from "sanitize-html"
import bgPattern from "../images/bg-pattern.jpg"

export default function SinglePost({ data }) {
  const { date, title, content, seo, featuredImage } = data.post

  return (
    <StyledArticle>
      <PostHero bgImg={featuredImage} title={title} date={date} />
      <section tw="container mx-auto py-10">
        <div
          tw="prose mx-auto xl:prose-lg"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(content),
          }}
        ></div>
      </section>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  background: url(${bgPattern});
`

export const query = graphql`
  query postQuery($slug: String!) {
    post: wpPost(slug: { eq: $slug }) {
      date(formatString: "D.M.Y")
      title
      content
      seo {
        breadcrumbs {
          text
          url
        }
        metaDesc
        title
      }
      featuredImage {
        node {
          ...acfImageFragment
        }
      }
    }
  }
`
