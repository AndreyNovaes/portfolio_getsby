import { motion } from "framer-motion";
import React from "react";

export default function TopDownAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}
