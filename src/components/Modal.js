import React from 'react'
import {motion} from 'framer-motion'

function Modal({binding}) {
    return (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
        <motion.div
          initial={{ y: 0, opacity:0 }}
          animate={{ y: -100, opacity:1}}
          transition={{ ease: "easeOut", duration: .45 }}
          className="bg-white rounded-lg border p-4"
        >
          <h1>{binding} copied!</h1>
        </motion.div>
      </div>
      );
    }
    

export default Modal