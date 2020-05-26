import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext }) => {
  const { previous, next } = pageContext

  return (
    <div>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
 
    </div>
  )
}

export default BlogPostTemplate


