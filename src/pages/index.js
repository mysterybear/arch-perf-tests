import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import { opacityInOut, presenceProps } from "../animations"
import SEO from "../components/SEO"


const IndexPage = () => (
  <motion.div {...presenceProps} {...opacityInOut} key="indexPage">
    <SEO title="Home" />
    <h1>Hi people</h1>
    <h2>some H2</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </motion.div>
)

export default IndexPage
