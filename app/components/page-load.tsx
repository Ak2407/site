"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PageLoadAnimationProps {
  children: React.ReactNode;
}

export function PageLoadAnimation({ children }: PageLoadAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth easing
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full h-full flex flex-col gap-10 items-start overscroll-x-auto "
        >
          {React.Children.map(children, (child, index) => (
            <motion.div key={index} variants={childVariants} className="w-full">
              {child}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
