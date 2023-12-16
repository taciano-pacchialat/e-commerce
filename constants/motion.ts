export const navbarVariants = {
  hidden: {
    height: "4rem",
  },
  show: {
    height: "100%",
  },
};

export const listVariants = {
  closed: {
    x: "100%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const linkVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
  },
  exit: {
    x: "100%",
    opacity: 0,
  },
};
