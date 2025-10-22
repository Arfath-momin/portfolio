'use client';

import { useEffect, useRef, useState } from 'react';
import * as motion from 'motion/react-client';

export default function Counter({ end, label, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 3000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, hasAnimated]);

  return (
    <motion.div
      ref={counterRef}
      className="de_count text-center text-base"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <h3 className="text-5xl font-bold mb-1">
        <span className="timer">{count}</span>
      </h3>
      <div className="text-base text-gray-400">{label}</div>
    </motion.div>
  );
}
