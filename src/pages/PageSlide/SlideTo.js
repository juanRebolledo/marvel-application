import React from 'react'
import { motion } from 'framer-motion'

import { pageTransition, slideTo } from 'services/Util/Util'

const SlideTo = ({ left, children }) => (
  <motion.div
    initial={slideTo(left).initial}
    animate={slideTo(left).in}
    exit={slideTo(left).exit}
    transition={pageTransition}
  >
    {children}
  </motion.div>
)

export default SlideTo
