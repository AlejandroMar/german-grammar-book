const fs = require('fs')

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = 'data'

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }

  const contentPath2 = 'docs'

  if (!fs.existsSync(contentPath2)) {
    reporter.info(`creating the ${contentPath2} directory`)
    fs.mkdirSync(contentPath2)
  }
}

// Define the "MenuLink" type
exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type MenuLink implements Node @dontInfer {
    id: ID!
    name: String!
    path: String!
    items: [MenuLink]
}
`
  createTypes(typeDefs)
}
