export const ImageSizeHome = {
  height: '100%',
  width: '100%'
}

export const pageStyle = { position: 'absolute' }

export const pageTransition = {
  type: 'tween',
  ease: 'backInOut',
  duration: 0.3
};

export const GoLeftToRigth = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: "100vw",
  }
};

export const GoRigthToLeft = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: "-100vw",
  }
}