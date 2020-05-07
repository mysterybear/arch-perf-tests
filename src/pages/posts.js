import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import React from "react"
import { opacityInOut, presenceProps } from "../animations"
import SEO from "../components/SEO"

const PostsPage = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <motion.div {...presenceProps} {...opacityInOut} key="postsPage">
      <SEO title="Posts" />
      {posts.map(({ node: post }) => (
        <div key={post.fields.slug}>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </div>
      ))}
    </motion.div>
  )
}

export const pageQuery = graphql`
  query posts {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 140)
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default PostsPage
