import React from 'react'
import { motion } from 'framer-motion'

import { pageTransition, GoLeftToRigth } from 'pages/Util/Util'

const LeftToRigth = ({ children }) => (
  <motion.div
    initial={GoLeftToRigth.initial}
    animate={GoLeftToRigth.in}
    exit={GoLeftToRigth.exit}
    transition={pageTransition}
  >
    {children}
  </motion.div>
)


export default LeftToRigth
