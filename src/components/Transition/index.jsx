'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { slideUp, fadeOut } from './anim';

export default function TransitionPreloader({ title }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate a transition duration
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate={isVisible ? "enter" : "exit"}
      className={styles.transitionPreloader}
    >
      {title && (
        <motion.p variants={fadeOut}>
          <span></span>{title}
        </motion.p>
      )}
    </motion.div>
  );
}
