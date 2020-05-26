import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Img from 'gatsby-image'

const IdeaTemplate = ({ data, pageContext }) => {
  const { previous, next } = pageContext

  const idea = data.contentfulIdea

  return (
    <div>
      <SEO
        title={idea.name}
      />
      <Img fluid={idea.cover.fluid}/>
 
      <p>why are you even here? did anyone ask you to be here? what
         are you doing? what are you so curious about? </p>
    </div>
  )
}

export default IdeaTemplate 

export const pageQuery = graphql `
  query CoolIdea($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulIdea (slug : {eq: $slug}) {
      name
      cover {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`


