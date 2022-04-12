import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import GlobalCss from "../components/globalCss"
import styled from "styled-components"
import Seo from "../components/seo"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

const Archived = styled.div``

const ArchivedContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 5% 0;
  display: flex;

  flex-direction: column;

  h1 {
    text-align: center;
    color: #fff;
    font-size: 4.5rem;
    text-transform: uppercase;
    font-weight: 400;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    li {
      list-style: none;
      flex: 1 1 30%;
      width: 0;

      a {
        text-decoration: none;
        h2 {
          color: #ff9c2d;
          text-transform: uppercase;
          font-weight: 400;
        }
      }
      p {
        color: #939393;
      }
    }
  }
`

const Archive = data => {
  const { edges: posts } = data.data.allMdx

  console.log("DATA", posts)
  return (
    <main>
      <Archived>
        <Menu />
        <Seo title="Archive" />
        <GlobalCss />
        <ArchivedContent>
          <h1>Archives</h1>
          <ul>
            {posts.map(({ node: post }) => (
              <li key={post.id}>
                <Link to={post.slug}>
                  <h2>{post.frontmatter.title}</h2>
                </Link>
                <p>{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </ArchivedContent>
      </Archived>
      <Footer />
    </main>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`

export default Archive
