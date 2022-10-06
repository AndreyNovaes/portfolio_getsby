import React, {useState} from 'react'
import Hero from '../components/Hero'
import { motion, AnimatePresence } from 'framer-motion';


export default function Home() {
  // o wrapper ja foi setado no gatsby-browser.tsx
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(!show);
  }, 4000);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            exit={{ x: -1500, transition: { duration: 1 } }}
          >
            <Hero />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
