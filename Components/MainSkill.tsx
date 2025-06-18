import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, delay } from 'framer-motion';

// Animation variants for entering and exiting phrases
const phraseVariants = {
  initial: { opacity: 0, y: -10,delay:1.5},
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.7, ease: 'easeIn' } },
};

const phrases = [
  'DevOps enthusiast',
  'Web Developer',
  'Competitive Coder',
];

const AnimatedLine = () => {
  const [index, setIndex] = useState(0);
  const maxLength = phrases.reduce((max, p) => Math.max(max, p.length), 0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center text-2xl font-semibold">
      <span className="mr-2">I&apos;m a</span>
      <span
        className="flex items-center"
        style={{ minWidth: `${maxLength}ch`, height: '1em', overflow: 'hidden' }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={phrases[index]}
            variants={phraseVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="inline-block text-blue-600"
          >
            {phrases[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
};

export default AnimatedLine;
