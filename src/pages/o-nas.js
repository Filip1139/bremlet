import React from "react"
import tw from "twin.macro"
import { graphql } from "gatsby"
import TextWithThreeImgs from "../components/TextWithThreeImgs"
import LongImage from "../components/LongImage"
import TwoImagesText from "../components/TwoImagesText"
import ImageSpacer from "../components/ImageSpacer"
import HeroSubpage from "../components/HeroSubpage"
import ImageTextCards from "../components/ImageTextCards"

export default function About({ data }) {
  const { aboutACF } = data.about
  return (
    <>
      <HeroSubpage fields={aboutACF?.hero} />
      <ImageTextCards fields={aboutACF?.boxes} />

      <TextWithThreeImgs fields={aboutACF?.firstImgGroup} variant={1} />
      <LongImage fields={aboutACF?.verticalImgGroup} />
      <TwoImagesText fields={aboutACF?.twoImgs} tw="z-10 relative lg:pb-16" />
      <ImageSpacer fields={aboutACF?.onlyImg} />
      <TextWithThreeImgs fields={aboutACF?.textImgGroupSecond} variant={2} />
    </>
  )
}

export const query = graphql`
  {
    about: wpPage(slug: { eq: "o-nas" }) {
      seo {
        ...SeoFragment
      }

      aboutACF {
        hero {
          heading
          desc
          bgImg {
            ...acfImageFragment
          }
        }
        boxes {
          title
          desc

          boxImg {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        firstImgGroup {
          text: textFirst
          desc: descFirst
          img {
            ...acfImageFragment
          }
          img2 {
            ...acfImageFragment
          }
          img3 {
            ...acfImageFragment
          }
        }
        onlyImg {
          ...acfImageFragment
        }
        textImgGroupSecond {
          text
          img {
            ...acfImageFragment
          }
          img2 {
            ...acfImageFragment
          }
          img3 {
            ...acfImageFragment
          }
        }
        twoImgs {
          desc
          bigImg {
            ...acfImageFragment
          }
          smallImg {
            ...acfImageFragment
          }
        }
        verticalImgGroup {
          desc
          bg {
            ...acfImageFragment
          }
        }
      }
    }
  }
`
