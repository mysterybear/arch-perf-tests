import { AnimatePresence } from "framer-motion"
import React from "react"
import "typeface-corben"
import "typeface-inter"
import { MediaContext } from "../contexts"
import { useMedia } from "../hooks"
import Footer from "./Footer"
import Header from "./Header"
import "./Layout.css"

const Layout = ({ children }) => {
  const screen = useMedia()
  return (
    <MediaContext.Provider value={screen}>
      <Header />
      <div className="flex flex-col h-full">
        <main className="flex-grow flex-shrink-0 mt-12">
          <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
        </main>
        <Footer />
      </div>
    </MediaContext.Provider>
  )
}

export default Layout
