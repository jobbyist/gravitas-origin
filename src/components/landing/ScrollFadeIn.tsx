import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
}

const ScrollFadeIn = ({ children, delay = 0 }: ScrollFadeInProps) => {
  const animationProps = useMemo(
    () => ({
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: {
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
    [delay]
  );

  return <motion.div {...animationProps}>{children}</motion.div>;
};

export default ScrollFadeIn;
