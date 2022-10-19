import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function OpacityLowDelay({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        exit={{ x: 1000, opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
