import React, { useState } from "react"
import styles from "./Header.module.css"
import Nav from "./Nav"
import { motion } from "framer-motion"
import theme from "tailwindcss/defaultTheme"
import { Link } from "gatsby"

const Header = () => {
  const [variant, setVariant] = useState("closed")

  return (
    <motion.header
      className={styles.root}
      initial="closed"
      animate={variant}
      variant={{
        closed: {
          transition: {
            staggerChildren: 0.7,
            staggerDirection: -1,
          },
        },
        open: {
          transiiton: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div
        className={styles.backdrop}
        variants={{
          closed: {
            y: `calc(-100% + ${theme.spacing[12]})`,
          },
          open: {
            y: 0,
          },
        }}
      />
      <div className={styles.container}>
        <div className={styles.banner}>
          <Link to="/" onClick={() => setVariant("closed")}>
            bannerFoo
          </Link>
        </div>
        <Nav />
      </div>
    </motion.header>
  )
}

export default Header
