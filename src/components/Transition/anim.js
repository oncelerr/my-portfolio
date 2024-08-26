export const slideUp = {
  initial: {
    top: '100vh'
  },
  enter: {
    top: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    top: '-100vh',
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
  }
};

export const fadeOut = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 }
  }
};
