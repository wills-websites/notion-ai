/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    return graphql(`
    {
      pages: allPrismicPage {
        nodes {
          id
          uid
        }
      }
    }
  `).then((result) => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        // Create pages
        result.data.pages.nodes.forEach(node => {
            if (node.uid !== 'home') {
                createPage({
                    path: `/${node.uid}`,
                    component: path.resolve(`src/templates/Page.js`),
                    context: {
                        id: node.id,
                    },
                })
            }
        })
    })
}