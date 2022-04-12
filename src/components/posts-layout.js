import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import GlobalCss from "../components/globalCss"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Seo from "../components/seo"
import styled from "styled-components"

import { Link } from "gatsby"

const Post = styled.div``

const PostContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 10% 0;
  color: #939393;
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    color: #fff;
    margin-bottom: 50px;
  }

  a {
    color: #ff9c2d;
  }
`

const shortcodes = { Link }
export default function PageTemplate({ data: { mdx } }) {
  return (
    <Post>
      <Menu />
      <Seo title={mdx.frontmatter.title} />
      <GlobalCss />
      <PostContainer>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </PostContainer>
      <Footer />
    </Post>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
