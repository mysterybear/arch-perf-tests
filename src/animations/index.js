export const presenceProps = {
  initial: "out",
  animate: "in",
  exit: "out",
}

export const opacityInOut = {
  variants: {
    out: {
      opacity: 0,
      transition: {
        duration: 2
      }
    },
    in: {
      opacity: 1,
      transition: {
        duration: 2
      }
    }
  }
}
