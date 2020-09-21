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

export const movePage = (sign) => ({
  initial: {
    opacity: 0,
    x: `${sign}100vw`,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: `${sign}100vw`,
  }
}
)
export const slideTo = (bool) => {
  if (bool) return movePage('')
  return movePage('-')
}

export const substr = str => str.length > 15 ? `${str.substr(0, 15)}...` : str