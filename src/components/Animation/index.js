import { motion } from "framer-motion";

export const Animation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      {children}
    </motion.div>
  );
};
