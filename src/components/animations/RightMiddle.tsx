import { motion } from "framer-motion";
import React from "react";

export default function RightMiddleAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}
