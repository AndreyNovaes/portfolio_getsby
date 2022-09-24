import { motion } from "framer-motion";
import React from "react";

export default function OpacityLowDelay({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 2.5 }}
    >
      {children}
    </motion.div>
  );
}
