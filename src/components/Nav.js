import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import React from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
]

const NavLink = ({ children, href, label, ...props }) => {
  const { pathname } = useLocation()
  const basePath = `/${pathname.split("/")[1]}`
  const active = basePath === href
  return children ? (
    children({ href, label, active, ...props })
  ) : (
    <Link to={href} {...props}>
      {label}
    </Link>
  )
}

const Nav = ({ children, ...props }) => {
  return (
    <nav {...props}>
      {links.map(linkProps => (
        <NavLink key={linkProps.href} children={children} {...linkProps} />
      ))}
    </nav>
  )
}
export default Nav
