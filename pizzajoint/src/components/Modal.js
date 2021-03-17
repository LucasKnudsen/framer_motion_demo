import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const backdrop = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

const modalVariant = {
  initial: {
    y: "-100vh",
    opacity: 0
  },
  animate: {
    y: 200,
    opacity: 1,
    transition: {
      delay: 0.5
    }
  }
}

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      { showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <motion.div className="modal"
            variants={modalVariant}
            initial="initial"
            animate="animate"
          >
            <p>Want to make another pizza?</p>
            <Link to="/" >
              <button onClick={() => setShowModal(false)}>Order another pizza!</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
