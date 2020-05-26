const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const ideaTemplate = path.resolve(`./src/templates/idea.js`)
  const result = await graphql(
    `
    query {
      allContentfulIdea {
          edges { 
            node {
              slug 
            }
          }  
        }
      }
    `
  )
  
  if (result.errors) {
    throw result.errors
  }

  // Create blog idea pages.
  const ideas = result.data.allContentfulIdea.edges

    ideas.forEach((idea, index) => {
    const previous = index === ideas.length - 1 ? null : ideas[index + 1].node
    const next = index === 0 ? null : ideas[index - 1].node

    actions.createPage({
      path: idea.node.slug,
      component: ideaTemplate,
      context: {
        slug: idea.node.slug,
        previous,
        next,
      },
    })
  })
}


