import { motion } from "framer-motion";
import React from "react";

export default function TopDownAnimation(props: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      {...props}
    >
      {props.children}
    </motion.div>
  );
}