// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import SEO from "../components/seo"
import {Card} from "../components"
import {Grid, GridContainer} from '../style'





const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const ideas = data.allContentfulIdea.edges

  return (
    <div title={siteTitle}>
      <SEO title="All posts" />
      <GridContainer>
        <Grid>
        {ideas.map(idea => {
          return (
  
              <Card 
                key={idea.node.slug}
                fluid={idea.node.cover.fluid}
                name={idea.node.name}
                slug={idea.node.slug}
                />

          )
        })} 
        </Grid>
      </GridContainer>
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
