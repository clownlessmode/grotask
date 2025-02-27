import { FC } from "react";
import { motion } from "framer-motion";

const Logotype: FC = () => {
  return (
    <div>
      <motion.svg
        width="32"
        height="32"
        // viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M32 28V4C32 1.79086 30.2092 0 28 0H4C1.79086 0 0 1.79086 0 4V28C0 30.2092 1.79086 32 4 32H28C30.2092 32 32 30.2092 32 28Z"
          fill="#5137E8"
          fillOpacity="0.5"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.path
          d="M32 20V4C32 1.79086 30.2092 0 28 0H4C1.79086 0 0 1.79086 0 4V20C0 22.2092 1.79086 24 4 24H28C30.2092 24 32 22.2092 32 20Z"
          fill="#5137E8"
          fillOpacity="0.6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.path
          d="M32 12V4C32 1.79086 30.2092 0 28 0H4C1.79086 0 0 1.79086 0 4V12C0 14.2092 1.79086 16 4 16H28C30.2092 16 32 14.2092 32 12Z"
          fill="#5137E8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
        />
      </motion.svg>
    </div>
  );
};

export default Logotype;
