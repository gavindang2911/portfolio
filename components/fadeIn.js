import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};
const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    >
        { children }
    </motion.div>
  );
}
export default FadeInWhenVisible;
// import React from 'react';
// import { motion } from 'framer-motion';

// const FadeInWhenVisible = ({ children }) => {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 0.3 }}
//       variants={{
//         visible: { opacity: 1, scale: 0.5 },
//         hidden: { opacity: 0, scale: 0 },
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default FadeInWhenVisible;
