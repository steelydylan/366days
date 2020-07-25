import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

import Layout from "./layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import styled from "styled-components"

const SideMenu = styled.div`
  width: 30%;
  padding: 0 10px;
`

const Article = styled.div`
  border-bottom: 1px solid #CCC;
  margin-bottom: 20px;
`


const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <div style={{ display: 'flex' }}>
      <div>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <Article key={node.slug}>
            <SEO title="Home" keywords={keywords} />
            <div>
              <Styled.h2
                css={css({
                  mb: 1,
                })}
              >
                <Styled.a
                  as={Link}
                  css={css({
                    textDecoration: `none`,
                  })}
                  to={node.slug}
                >
                  {(node.frontmatter && node.frontmatter.image) && <img src={node.frontmatter.image} />}
                  {title}
                </Styled.a>
              </Styled.h2>
              <small>{node.date}</small>
              <Styled.p>{node.excerpt}</Styled.p>
            </div>
          </Article>
        )
      })}
      </div>
      <SideMenu>
      </SideMenu>
    </div>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts