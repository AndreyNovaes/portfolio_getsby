import { motion } from "framer-motion";
import React from "react";

export default function LeftMiddleAnimation(props: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      {...props}
    >
      {props.children}
    </motion.div>
  );
}