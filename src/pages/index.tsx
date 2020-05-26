// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import SEO from "../components/seo"
import {Grid} from '../style'




const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const ideas = data.allContentfulIdea.edges

  return (
    <div title={siteTitle}>
      <SEO title="All posts" />
      <Grid>
      {ideas.map(({node}) => {
        const name = node.name || node.slug
        return (
          <div key={node.slug}> 
            <Img fluid={node.cover.fluid}/>
            <h3>{name}</h3>
            <Link to={node.slug}>
              {name}
            </Link>
          </div>
        )
      })} 
      </Grid>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql `
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulIdea {
      edges {
        node {
          name
          slug
          cover {
            fluid {
              ...GatsbyContentfulFluid
            }
          } 
        }
      }
    }
  }
`
