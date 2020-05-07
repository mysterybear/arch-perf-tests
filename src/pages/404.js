import { motion } from "framer-motion"
import React from "react"
import { opacityInOut, presenceProps } from "../animations"
import SEO from "../components/SEO"


const NotFoundPage = () => (
  <motion.div {...presenceProps} {...opacityInOut}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </motion.div>
)

export default NotFoundPage
