// Animation Utilities for Multi-Universe Portfolio

export const fadeInUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export const fadeInStagger = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export const rotate3D = {
  initial: { opacity: 0, rotateX: -15, y: 40 },
  animate: { opacity: 1, rotateX: 0, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export const cardHover = {
  scale: 1.02,
  y: -6,
  transition: { duration: 0.3, ease: "easeOut" }
};

export const cardTap = {
  scale: 0.98,
  transition: { duration: 0.2 }
};

export const categoryExpand = {
  initial: { scale: 1, opacity: 1 },
  animate: { 
    scale: 1.05,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

export const projectCardVariants = {
  hidden: { 
    opacity: 0, 
    rotateX: -15, 
    y: 40,
    scale: 0.95
  },
  visible: (i) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const categoryCardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

