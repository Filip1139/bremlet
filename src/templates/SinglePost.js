import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"
import PostHero from "./singlePost/PostHero"
import sanitizeHtml from "sanitize-html"
import bgPattern from "../images/bg-pattern.jpg"
import SEO from "../components/seo"

export default function SinglePost({ data }) {
  const { date, title, content, seo, featuredImage } = data.post.nodes[0]
  console.log(data.post)
  return (
    <>
      <SEO title={seo.title} description={seo.metaDesc} />
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
    </>
  )
}

const StyledArticle = styled.article`
  background: url(${bgPattern});
`

export const query = graphql`
  query postQuery($slug: String!) {
    post: allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        date(formatString: "D.M.Y")
        title
        content
        seo {
          ...SeoFragment
        }
        featuredImage {
          node {
            ...acfImageFragment
          }
        }
      }
      edges {
        next {
          title
          uri
        }
        previous {
          title
          uri
        }
      }
    }
  }
`
