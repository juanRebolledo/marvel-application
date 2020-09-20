import React from 'react'
import { motion } from 'framer-motion'

import { GoRigthToLeft, pageTransition } from 'pages/Util/Util'

const RigthToLeft = ({ children }) => (
  <motion.div
    initial={GoRigthToLeft.initial}
    animate={GoRigthToLeft.in}
    exit={GoRigthToLeft.exit}
    transition={pageTransition}
  >
    {children}
  </motion.div>
)

export default RigthToLeft
