export const opacity = {
    initial: {
        opacity: 1
    },
    enter: {
        transition: {duration: 0, delay: 0}
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}