"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface PageLoadAnimationProps {
  children: React.ReactNode;
}

export function PageLoadAnimation({ children }: PageLoadAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth easing
          }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
