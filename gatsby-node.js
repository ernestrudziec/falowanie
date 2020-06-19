const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const result = await graphql(`
    query MyQuery {
      allDatoCmsArticle {
        edges {
          node {
            title
            paragraph
            author
            id
            thumbnail {
              url
            }
          }
        }
      }
    }
  `)

  await console.log(result)

  await result.data.allDatoCmsArticle.edges.forEach(post => {
    const slugifiedTitle = slugify(post.node.title, {
      lower: true,
    })
    console.log(slugifiedTitle)

    createPage({
      path: `dziennik/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        slug: slugifiedTitle,
        data: post.node,
      },
    })
  })
}
